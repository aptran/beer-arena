const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',

	entry: [
		'./src/index'
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
	    	minimize: true,
	    	compress: {
	        	warnings: false
	      	}
	    }),
		new webpack.DefinePlugin({
	      	'process.env': {
	        	'NODE_ENV': JSON.stringify('production')
	      	}
	    }),
	    new ExtractTextPlugin('style.css')
	],

	module: {
		loaders: [
			{
		        test: /\.js$/,
		        loaders: ['react-hot', 'babel'],
		        exclude: /node_modules/
		    },
		    {
		        test: /\.scss$/,
		        loader: ExtractTextPlugin.extract(
		          'style', 
		          'css!sass' 
		        ),
		        include: path.join(__dirname, 'src')
		    },
		    {
		        test: /\.json/,
		        loader: 'json',
		        include: path.join(__dirname, 'src')
		    }
		]
	}

}
