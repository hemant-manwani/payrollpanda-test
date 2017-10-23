const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const path = require('path')

const PORT = 8000

const compiler = webpack(config)

const server = new WebpackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  }
})

server.listen(PORT, 'localhost', () => {
	console.log(`Developer server working on port ${PORT}`)
})
