'use strict';

// const CategoryCtrl = require('./category.controller');
const MongoClient = require('mongodb').MongoClient;
const Bson = require('bson');
let dbo;

const config = require('../configurations/config');
// const auth = require('../auth/auth');
// const jwt = require('jsonwebtoken');

module.exports = MongoClient.connect(config.dbconn, function (err, db) {
    if (err) throw err;
    dbo = db.db(config.myDB);
});

var exports = function (server) {

    server.post('/api/orders', (req, res, next) => {
        let text = req.body;
        dbo.collection("orders").insert(text, function (err, response) {
            if (err) throw err;
            res.send(200, text);
        });
    });

    server.get('/api/orders', (req, res, next) => {
        dbo.collection("orders").find({}).toArray(function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });
    });

    server.get('/api/orders/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        dbo.collection("orders").findOne({ '_id': idC }, function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });

    });

    server.put('/api/orders/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        let text = req.body;

        dbo.collection("orders").update({ '_id': idC }, text, function (err, response) {
            if (err) throw err;
            res.send(200, "Update Ok", text);
        });


    });

    server.del('/api/orders/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        dbo.collection("orders").deleteOne({ '_id': idC }, function (err, response) {
            if (err) throw err;
            res.send(200, "Yes Delete OK");
        });
    });

    server.del('/api/orders', (req, res, next) => {
        dbo.collection("orders").deleteMany({}, function (err, response) {
            if (err) throw err;
            res.send(200, 'Data Berhasil Dihapus');
        });
    });

}

module.exports = exports;