var routes = [
    //Start site endpoints.
    {
        path: '/',
        method: 'GET',
        handler: {
            file: 'index.html'
        },
    },
    {
        path: '/scripts/{param*}',
        method: 'GET',
        handler: {
            directory: {
                path: 'scripts',
                redirectToSlash: true,
                index: true
            }
        }
    },
    //End site endpoints.
    //Start API endpoints.
    {
        path: '/api/form',
        method: 'POST',
        handler: function (request, reply) {
            reply('Hello /api/form');
        }
    },
    {
        path: '/api/form/{formId}',
        method: 'GET',
        handler: function (request, reply) {
            reply('Hello /api/form/' + request.params.formId);
        }
    },
    {
        path: '/api/form/{formId}',
        method: 'PUT',
        handler: function (request, reply) {
            reply('Hello form/{formId}');
        }
    }
];
module.exports = routes;
