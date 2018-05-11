const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require("path");
const uglifyjsPlugin= require('uglifyjs-webpack-plugin');
const webpackFile = require("./webpack.file.conf");
const baseWebpackConfig = require("./webpack.base.conf");

let config = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.resolve(webpackFile.proDirectory),
        filename: 'js/[name].js',
        chunkFilename: "js/[name].js",
        publicPath: ''
    },

    devtool: false,
    plugins: [],
    optimization: {
        minimizer: [
            new uglifyjsPlugin({
                uglifyOptions: {
                    compress: false,
                    comments: false
                }
            })
        ]
    },
});

config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());


module.exports = config;