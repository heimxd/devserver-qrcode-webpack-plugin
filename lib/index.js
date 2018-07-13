const qrcode = require('qrcode-terminal');
const internalIp = require('internal-ip');

class DevserverQRcodeWebpackPlugin {
    getLocalIp() {
        return internalIp.v4.sync();
    }
    printQRcode(url) {
        qrcode.generate(url, { small: true }, function(qrcode) {
            console.log(qrcode);
            console.log(url);
        });
    }
    apply(compiler) {
        const devServer = compiler.options.devServer;
        if (!devServer) {
            return;
        }
        const protocol = devServer.https ? 'https' : 'http';
        const hostname = this.getLocalIp();
        const port = devServer.port;
        const pathname = devServer.openPage;
        const url = `${protocol}://${hostname}:${port}/${pathname}`;
        this.printQRcode(url);
    }
}

module.exports = DevserverQRcodeWebpackPlugin;
