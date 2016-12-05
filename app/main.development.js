import { app, dialog, BrowserWindow, ipcMain } from 'electron'
import pify from 'pify'
import jsonStorage from 'electron-json-storage'
import fs from 'fs'
import path from 'path'
import jsonfile from 'jsonfile'

let mainWindow = null

/*
mcmunder stuff starts here
*/

// Create a persistent storage object similar to locaStorage. Pify promisifies
// it to allow promise, await/async syntax
const storage = pify(jsonStorage)

const loadProducts = (dir) => {
  return new Promise((resolve, reject) => {
    const allFiles = fs.readdirSync(path.resolve(dir))
    const rawData = allFiles
      .filter(filename => (
        path.extname(filename) === '.json'
      ))
      .map(filename => {
        return jsonfile.readFileSync(path.join(dir, filename))
      })

    storage.set('products', rawData)
      .then(err => {
        if (err) reject(err)

        storage.get('products')
          .then(prods => {
            resolve(prods)
          })
          .catch(err => reject(err))
      })
  })
}

ipcMain.on('choose-data-dir', (event) => {
  // dialog.showOpenDialog always returns an array of files/dirs!
  dialog.showOpenDialog({ properties: ['openDirectory'] }, (dataDirs) => {
    const choosenDir = dataDirs[0]
    loadProducts(choosenDir)
      .then(data => {
        event.sender.send('data-dir-choosen', data)
      })
      .catch(err => console.error(err))
  })
})

/*
mcmunder stuff ends here
*/

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support'); // eslint-disable-line
  sourceMapSupport.install()
}

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')() // eslint-disable-line global-require
  const path = require('path'); // eslint-disable-line
  const p = path.join(__dirname, '..', 'app', 'node_modules'); // eslint-disable-line
  require('module').globalPaths.push(p); // eslint-disable-line
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer') // eslint-disable-line global-require

    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ]
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    for (const name of extensions) { // eslint-disable-line
      try {
        await installer.default(installer[name], forceDownload)
      } catch (e) {} // eslint-disable-line
    }
  }
}

app.on('ready', async () => {
  await installExtensions()

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  })

  mainWindow.loadURL(`file://${__dirname}/app.html`)

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
    mainWindow.focus()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools()
  }
})
