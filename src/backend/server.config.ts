import path = require('path');

export = {
	hapiConfig: hapiConfig,
	hapiConstructionParams: hapiConstructionParams,
	serverConfig: serverConfig
};

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