var hapi = require('hapi');
var inert = require('inert');
var routes = require('./server.routes');
var config = require('./server.config');
console.log(__dirname);
//Configure the server.
var server = new hapi.Server(config.hapiConstructionParams);
server.register(inert, function () { });
server.connection(config.hapiConfig);
server.route(routes);
if (config.serverConfig.logRequests) {
    server.ext('onRequest', function (request, reply) {
        console.log('Request received: ' + request.path);
        reply.continue();
    });
}
//Start the server.
server.start(function (err) {
    console.log('Listening on ' + server.info.uri);
});
module.exports = server;
