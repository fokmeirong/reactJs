const path = require("path");

let config = {
        entry: {
            'index':'./app.js'
        },
        resolve: {
            extensions: [".js", ".jsx", ".css",".scss"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        'babel-loader',
                    ],
                    exclude: [
                        path.resolve(__dirname, "../../node_modules")
                    ],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ],
                    exclude: [
                        path.resolve(__dirname, "../../node_modules")
                    ],
                }
            ]
        }
    };
module.exports = config;