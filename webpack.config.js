var webpack = require('webpack');
var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");



module.exports = {
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: {minimize: true}
                }
            ]
        },
        {
            test: /\.(s*)css$/,
            use:
            [

                { 
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        modules: true,
                        localIdentName: "[name]__[local]__[hash:base64:5]"
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }
    ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ],
    watch: true,
    // instead of using relative pathes
    resolve: {
        modules:[path.resolve(__dirname, "src"), "node_modules"],
        extensions: ['.jsx', '.js', '.scss']
    }
}