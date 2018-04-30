const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require("path");
const uglifyjsPlugin= require('uglifyjs-webpack-plugin');

const baseWebpackConfig = require("./webpack.base.conf");

let config = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
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