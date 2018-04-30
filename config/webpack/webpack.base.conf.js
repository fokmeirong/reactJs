const path = require("path");

let config = {
        entry: {
            'index':'./entryBuild/index.js'
        },
        resolve: {
            extensions: [".js", ".json", ".jsx", ".css",".scss"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        'babel-loader',
                    ],
                    include: [
                        path.resolve(__dirname, "../../app"),
                        path.resolve(__dirname, "../../entryBuild")
                    ],
                    exclude: [
                        path.resolve(__dirname, "../../node_modules")
                    ],
                }
                
            ]
        }
    };
module.exports = config;