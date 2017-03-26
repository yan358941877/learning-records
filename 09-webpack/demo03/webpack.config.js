var webpack = require('webpack')
var path = require('path');
var HtmlWebpacePlugin = require('html-webpack-plugin');
module.exports = {

    // entry: {
    //     index: './js/entry.js'
    // },
    // output: {
    //     path: './dist',
    //     filename: 'bundle.js'
    // }
    entry: './js/entry.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    }
}