const webpack = require('webpack');
const opn = require('opn');
const merge = require('webpack-merge');
const path = require("path");
const baseWebpackConfig = require("./webpack.base.conf");
const webpackFile = require("./webpack.file.conf");

let config = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        path: path.resolve(webpackFile.devDirectory),
        filename: 'js/[name].js',
        chunkFilename: "js/[name].js",
        publicPath: ''
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true,
        inline: true,
        contentBase: path.resolve(webpackFile.devDirectory),
        historyApiFallback: true,
        disableHostCheck: true,
        proxy: [
            {
                context: ['/api/**', '/u/**'],
                target: 'http://192.168.12.100:8080/',
                secure: false
            }
        ],
        after() {
            opn('http://localhost:' + this.port);
        }
    }
});
module.exports = config;