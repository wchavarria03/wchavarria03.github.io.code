const common = require('./webpack.common.js')

module.exports = Object.assign(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true
    }
})