import { app, BrowserWindow } from 'electron'
import installer, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import child from 'child_process'

// Keep global ref to window t avoi GC
let win = null

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('ready', async () => {
  try {
    await installer(REACT_DEVELOPER_TOOLS)
    await installer(REDUX_DEVTOOLS)
  } catch (err) {
    console.error(err)
  }

  win = new BrowserWindow({
    show: false,
    width: 1200,
    height: 800
  })

  win.webContents.on('did-finish-load', () => {
    win.show()
    win.focus()
  })

  win.openDevTools({
    mode: 'right'
  })

  win.on('closed', () => {
    win = null
  })

  child.exec('cd ./app && npm start')

  const loadwin = () => {
    win.loadURL(`http://localhost:3000`)
  }

  // wait for server to finish loading - super ugly
  setTimeout(loadwin, 2000)
})
