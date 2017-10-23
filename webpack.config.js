const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION ?
  ['./src/index.js']
  : 
  [
  	'./src/index.js',
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8000',
  ];

const plugins = PRODUCTION ?
  [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('styles-[contentHash:10].css'),
    new HTMLWebpackPlugin({
      template: 'index-template.html',
    })
	]
  : 
  [
	  new webpack.HotModuleReplacementPlugin(),
	]

plugins.push(
  new webpack.DefinePlugin({
    DEVELOPMENT: JSON.stringify(DEVELOPMENT),
    PRODUCTION: JSON.stringify(PRODUCTION)
  })
)


const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]'

const prodCSSLoader = ExtractTextPlugin.extract(
  {
    fallback: 'style-loader',
    use: [`css-loader?localIdentName=${cssIdentifier}`, 'sass-loader']
  }
)

const devCSSLoader = ['style-loader', `css-loader?localIdentName=${cssIdentifier}`, 'sass-loader'];

const cssLoader = PRODUCTION ? prodCSSLoader : devCSSLoader;
module.exports = {
  devtool: 'source-map',
  entry,
  plugins,
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/,
      loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
      exclude: '/node_modules/'
    },
    {
      test: /\.(css|scss)$/,
      loaders: cssLoader,
      exclude: '/node_modules/'
    },
    {
      test: /\.hbs/,
      loader: "handlebars-template-loader"
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
  },
  node: {
    fs: 'empty'
  },
  resolve:{
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
  }
}
