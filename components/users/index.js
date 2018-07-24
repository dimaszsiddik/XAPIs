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

    server.post('/api/users', (req, res, next) => {
        let text = req.body;
        dbo.collection("users").insert(text, function (err, response) {
            if (err) throw err;
            res.send(200, text);
        });
    });

    server.get('/api/users', (req, res, next) => {
        dbo.collection("users").find({}).toArray(function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });
    });

    server.get('/api/users/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        dbo.collection("users").findOne({ '_id': idC }, function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });

    });

    server.put('/api/users/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        let text = req.body;

        dbo.collection("users").update({ '_id': idC }, text, function (err, response) {
            if (err) throw err;
            res.send(200, "Update Ok", text);
        });


    });

    server.del('/api/users/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        dbo.collection("users").deleteOne({ '_id': idC }, function (err, response) {
            if (err) throw err;
            res.send(200, "Yes Delete OK");
        });
    });

    server.del('/api/users', (req, res, next) => {
        dbo.collection("users").deleteMany({}, function (err, response) {
            if (err) throw err;
            res.send(200, 'Data Berhasil Dihapus');
        });
    });

}

module.exports = exports;