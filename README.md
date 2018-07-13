<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>
# devserver-qrcode-webpack-plugin
这是个基于webpack-dev-server的webpack插件，用于在终端生成二维码
## Install
```
npm install devserver-qrcode-webpack-plugin --save-dev
```
```
yarn add devserver-qrcode-webpack-plugi --dev
```
## Usage
```
const DevserverQRcodeWebpackPlugin = require('devserver-qrcode-webpack-plugin');

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new DevserverQRcodeWebpackPlugin()
  ]
}
```
