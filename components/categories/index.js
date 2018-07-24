'use strict';

const Bson = require('bson');

const CategoriCtrl = require('./category.controller');

var exports = function (server) {

    server.post('/api/categories', (req, res, next) => {
        CategoriCtrl.Create(req, res);
    });

    server.get('/api/categories', (req, res, next) => {
        CategoriCtrl.GetAll(res);
    });

    server.get('/api/categories/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        CategoriCtrl.GetById(idC, res);
    });

    server.put('/api/categories/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        let text = req.body;
        CategoriCtrl.Update(idC, text, res);
    });

    server.del('/api/categories/:id', (req, res, next) => {
        let idC = Bson.ObjectID(req.params.id);
        CategoriCtrl.Delete(idC, res);
    });

    server.del('/api/categories', (req, res, next) => {
        CategoriCtrl.DeleteAll(res);
    });

}

module.exports = exports;