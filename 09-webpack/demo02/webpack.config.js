var webpack = require('webpack')

module.exports = {

    entry: {
        index: './js/entry.js'
    },
    output: {
        path: './dist/',
        filename: 'bundle.js'
    }
}