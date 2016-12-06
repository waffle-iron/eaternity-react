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

// set indentation for jsonfile
jsonfile.spaces = 2

const loadJsonFiles = (_dataDir, folder) => {
  const fullPath = `${_dataDir}/${folder}`
  const allFiles = fs.readdirSync(fullPath)
  const jsonData = allFiles
    .filter(filename => {
      return path.extname(filename) === '.json' &&
      !(filename === 'prod.schema.json')
    })
    .map(filename => {
      return {
        filename,
        ...jsonfile.readFileSync(`${fullPath}/${filename}`)
      }
    })

  return jsonData
}

const loadFAOFiles = (_dataDir) => {
  const fullPath = `${_dataDir}/fao-product-list.json`
  return jsonfile.readFileSync(fullPath)
}

ipcMain.on('choose-data-dir', event => {
  // dialog.showOpenDialog always returns an array of files/dirs!
  dialog.showOpenDialog({ properties: ['openDirectory'] }, async dataDirs => {
    if (!dataDirs) return

    const choosenDir = dataDirs[0]

    const products = loadJsonFiles(choosenDir, 'prods')
    const nutrients = loadJsonFiles(choosenDir, 'nutrs')
    const faos = loadFAOFiles(choosenDir)

    try {
      await storage.set('products', products)
      await storage.set('nutrients', nutrients)
      await storage.set('faos', faos)
    } catch (err) {
      console.error(err)
    }

    event.sender.send('data-dir-choosen', choosenDir)
  })
})

ipcMain.on('back-button-clicked', event => {
  const boxOptions = {
    type: 'warning',
    buttons: ['Cancel', 'Go back to table view'],
    title: 'Warning',
    message: `Did you save your changes? Changes will be lost when you go back to the table view without saving!`
  }

  dialog.showMessageBox(boxOptions, userInput => {
    if (userInput === 0) return

    event.sender.send('back-box-verified')
  })
})

ipcMain.on('save-button-clicked', (event, fileName) => {
  const boxOptions = {
    type: 'warning',
    buttons: ['Cancel', 'Save'],
    title: 'Warning',
    message: `Clicking save will save changes to ${fileName}. File will be overwritten if it exists!`
  }

  dialog.showMessageBox(boxOptions, userInput => {
    if (userInput === 0) return

    event.sender.send('save-box-verified')
  })
})

ipcMain.on('save-updated-product', (event, dataDir, id) => {
  storage.get('products')
    .then(allProducts => {
      const updatedProduct = allProducts.filter(product => {
        return product.id === id
      })
      const fileName = updatedProduct[0].filename
      jsonfile.writeFileSync(
        `${dataDir}/prods/${fileName}`,
        updatedProduct[0]
      )
    })
    .catch(err => console.error(err))
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
