const path = require('path') 
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WorkboxWebPackPlugin = require('workbox-webpack-plugin')

module.exports = {
    mode:"production",
    entry:'./src/client/index.js',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module:{
        rules:[
                {
                test:'/\.js$/',
                exclude:/node-modules/,
                loader:"babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader', ],
            },

        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:"./src/client/views/index.html",
            filename:"./index.html",
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new WorkboxWebPackPlugin.GenerateSW()
    ]
}
