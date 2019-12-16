const path = require('path')
const resolve = str => path.resolve(__dirname, `../${str}`)
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: resolve('src/index.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('index.html'),
            chunks: ['index'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
}