var webpack = require('webpack');
var path = require('path');



module.exports = {
    entry: [
        path.join(__dirname, '../index.js')
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "bable-loader"
        }]
    },
    resolve: {
        modules:[
            path.join(__dirname, "src"),
            "node_modules"
        ]
    }
}