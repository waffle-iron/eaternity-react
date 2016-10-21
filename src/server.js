const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const favicon = require('serve-favicon')
const config = require('../webpack.config.js')

const app = express()

const compiler = webpack(config)
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(favicon(`${__dirname}/images/favicon.ico`))
app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.get('*', function response (req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../build/index.html')))
  res.end()
})

app.listen(3000, err => {
  if (err) {
    console.log(err)
  }
  console.info('Magic happening on port 3000 ✨')
})
