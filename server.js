'use strict';

const restify = require('restify');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

/*
/ Menentukan Nama Server Dan Versi Server
*/
const server = restify.createServer({
    name: 'API',
    version: '1.0.0',
});

server.use(bodyParser.json());
/*
/
/
*/

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PUT");
    next();
});

server.get('/', (req, res, next) => {
    var html = '<html><head><title>Some Title</title></head><body><h1>LiveCode</h1></body></html>';

    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(html),
        'Content-Type': 'text/html'
    })

    res.write(html);
    res.end;
});


/*
/ Route
/ Components Route
*/
// require('./components/categories')(server);
// require('./components/products')(server);
// require('./components/tables')(server);
// require('./components/users')(server);
// require('./components/reservations')(server);
// require('./components/orders')(server);

//test router



/*
/ global itu framework dari nodeJS
/ .config it's what ever you want
*/
global.config = require('./components/configurations/config');
//Use connect method to connect to the server
// MongoClient.connect(config.dbconn, function(error, client) {   
//     if(error){
//         console.log('Unable to connect to Database');
//     }else{
//         console.log('Successfully to connect to Database');
//     }
//   });
//users controller
require('./components/controllers/users.controller')(server);

require('./components/controllers/categories.controller')(server);

require('./components/controllers/products.controller')(server);

//test router
require('./components/controllers/template.controller')(server, 'tests');

server.listen(config.port, function () {
    console.log('%s listen at %s', server.name, server.url);
});