const qrcode = require('qrcode-terminal');
const internalIp = require('internal-ip');

const SIZE_LARGE = 'large';
const SIZE_SMALL = 'small';

class DevserverQRcodeWebpackPlugin {
    constructor(options) {
        if (Object.prototype.toString.call(options) !== '[object Object]') {
            return;
        }
        const { size } = options;
        this.size = size == SIZE_LARGE ? SIZE_LARGE : SIZE_SMALL;
    }
    getLocalIp() {
        return internalIp.v4.sync();
    }
    printQRcode(url) {
        qrcode.generate(url, { small: this.size == SIZE_LARGE }, function(qrcode) {
            console.log(qrcode);
            console.log(url);
        });
    }
    apply(compiler) {
        const devServer = compiler.options.devServer;
        if (!devServer) {
            console.warn('Using plugin devserver-qrcode-webpack-plugin needs to start webpack-dev-server');
            return;
        }
        const protocol = devServer.https ? 'https' : 'http';
        const hostname = this.getLocalIp();
        const port = devServer.port;
        const pathname = devServer.openPage || '';
        const url = `${protocol}://${hostname}:${port}/${pathname}`;
        this.printQRcode(url);
    }
}

module.exports = DevserverQRcodeWebpackPlugin;
