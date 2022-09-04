/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development';

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/index.ts'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: {
			name: 'JToasted',
			type: 'umd',
		},
		clean: true,
	},
	mode: mode,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	},
	devtool: 'inline-source-map',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};
