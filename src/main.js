import {app, BrowserWindow} from 'electron'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

let mainWindow = null

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
