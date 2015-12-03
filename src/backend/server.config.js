var path = require('path');
var hapiConfig = {
    port: 3000
};
var hapiConstructionParams = {
    connections: {
        routes: {
            files: {
                relativeTo: path.join(__dirname, '../frontend')
            }
        }
    }
};
var serverConfig = {
    logRequests: false
};
module.exports = {
    hapiConfig: hapiConfig,
    hapiConstructionParams: hapiConstructionParams,
    serverConfig: serverConfig
};
