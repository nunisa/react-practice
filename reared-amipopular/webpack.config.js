var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: SRC_DIR + '/app/index.js',
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{ 
                test: /\.css$/, 
                include: SRC_DIR,
                loader: 'style-loader!css-loader'
            },
            {
            	test: /\.(jpe?g|gif|png)$/,
            	include: SRC_DIR,
            	loader: 'file-loader'
            }
		]
	}
};

module.exports = config;