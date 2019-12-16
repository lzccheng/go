const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const defaultConfig = require('./config.default')
const path = require('path')
const resolve = str => path.resolve(__dirname, `../${str}`)


const config = {
    output: {
        path: resolve('docs'),
        filename: 'js/[name].[hash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}

module.exports = merge(defaultConfig, config)