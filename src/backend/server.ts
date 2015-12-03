import hapi = require('hapi');
import inert = require('inert');
import routes = require('./server.routes');
import config = require('./server.config');
export = server;

console.log(__dirname);

//Configure the server.
var server = new hapi.Server(config.hapiConstructionParams);
server.register(inert, () =>{});
server.connection(config.hapiConfig);
server.route(routes);
if(config.serverConfig.logRequests){
	server.ext('onRequest', (request, reply) => {
		console.log('Request received: ' + request.path);
		reply.continue();
	});	
}

//Start the server.
server.start((err) => {
	console.log('Listening on ' + server.info.uri);
});