const merge = require('webpack-merge')
const defaultConfig = require('./config.default')

const path = require('path')
const resolve = str => path.resolve(__dirname, `../${str}`)

const config = {
    
}

module.exports = merge(defaultConfig, config)