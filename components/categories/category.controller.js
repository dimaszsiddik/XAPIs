require('../base/base');
'use strict';

const MongoClient = require('mongodb').MongoClient;
const config = require('../configurations/config');

module.exports = MongoClient.connect(config.dbconn, function (err, db) {
    if (err) throw err;
    dbo = db.db(config.myDB);

    dbo.collection("categories").find({}).toArray(function (err, response) {
        jumlahData = response.length;
    });
});

function CategoryController() {
    this.Create = function (req, res) {
        let text = req.body;
        dbo.collection("categories").insert(text, function (err, response) {
            if (err) throw err;
            res.send(200, text, response);
        });
    }

    this.GetAll = function(res){
        dbo.collection("categories").find({}).toArray(function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });
    }

    this.GetById = function(idC, res){
        dbo.collection("categories").findOne({ '_id': idC }, function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });
    }

    this.Update = function(idC, entity, res){
        dbo.collection("categories").update({ '_id': idC }, entity, function (err, response) {
            if (err) throw err;
            res.send(200, entity, response);
        });
    }

    this.Delete = function(idC, res){
        dbo.collection("categories").deleteOne({ '_id': idC }, function (err, response) {
            if (err) throw err;
            res.send(200, response);
        });
    }

    this.DeleteAll = function(res){
        dbo.collection("categories").deleteMany({}, function (err, response) {
            if (err) throw err;
            res.send(200,  jumlahData +' Berhasil Dihapus');
        });
    }
}

module.exports = new CategoryController();