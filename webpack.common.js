/**

Queue, a JavaScript FIFO Queue.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of Queue.

Queue is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Queue is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Queue.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

const fs = require("fs");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: "index.css",
});
const WebpackNotifierPlugin = require("webpack-notifier");
const webpackNotifierPlugin = new WebpackNotifierPlugin({
	title: "Queue",
	alwaysNotify: true,
});
const Webpack = require("webpack");
const webpackBannerPlugin = new Webpack.BannerPlugin({
	banner: fs.readFileSync("./license_header", "utf8"),
	raw: true,
});

module.exports = {
	entry: __dirname + "/src/index.js",
	optimization: {
		minimize: process.env.MINIMIZE === "true" ? true : false,
	},
	output: {
		publicPath: "assets",
		library: "Queue",
		libraryTarget: "umd",
	},
	devServer: {
		inline: true,
		contentBase: "./public",
		port: process.env.PORT,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loader: "json-loader",
			},
			{
				test: /\.(sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === "development",
							reloadAll: true,
						},
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},
	plugins: [miniCssExtractPlugin, webpackNotifierPlugin, webpackBannerPlugin],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "src/"),
		},
	},
};
