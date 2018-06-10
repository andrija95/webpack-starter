const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
	mode: 'development',
	devtool : 'cheap-eval-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: './develop/',
		overlay: true
	}
});