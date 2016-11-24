import {app, BrowserWindow} from 'electron'
import url from 'url'
import path from 'path'

let win

const createWindow = () => {
  win = new BrowserWindow({
    show: false,
    width: 1200,
    height: 800,
    frame: false
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../app/build/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  win.webContents.on('did-finish-load', () => {
    win.show()
    win.focus()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
