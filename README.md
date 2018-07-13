<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# devserver-qrcode-webpack-plugin
This is a webpack plugin based on [webpack-dev-server](https://github.com/webpack/webpack-dev-server), which is used to generate qrcode at the terminal.

## Install
```
npm install devserver-qrcode-webpack-plugin --save-dev
```
```
yarn add devserver-qrcode-webpack-plugin --dev
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
    new DevserverQRcodeWebpackPlugin({
      size: 'small'
    })
  ],
  devServer: {}
}
```
## Options

|Name|Type|Default|Description|
|:--:|:--:|:--:|:---|
|size|String|'small'|'small' or 'large'|
