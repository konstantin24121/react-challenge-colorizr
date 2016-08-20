'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/colorizr/index'
	],

	resolve: {
		root: path.resolve(__dirname),
		alias: {
			'@common': 'src/common'
		},
		extensions: ['', '.css', '.js', '.scss']
	},

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		},
		{
			test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
			loader: `url?limit=100000`
		}]
	},
	sassLoader: {
		includePaths: [
			path.resolve(__dirname, 'src/common/styles')
		]
	}
};
