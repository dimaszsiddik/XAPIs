'use strict'

const ObjectId = require('mongodb').ObjectID;

module.exports = function(entity){
    if (entity.categoryId){
        entity.categoryId = ObjectId(entity.categoryId);
    }

    if (entity.userId){
        enity.userId = ObjectId(entity.userId );
    }
    if (entity.waiterId){
        enity.waiterId = ObjectId(entity.waiterId );
    }

    if (entity.productId){
        entity.productId = ObjectId(entity.productId);
    }
    if (entity.reservationId){
        entity.reservationId = ObjectId(entity.reservationId);
    }
    if (entity.orderId){
        entity.orderId = ObjectId(entity.orderId);
    }
    if (entity.tableId){
        entity.tableId = ObjectId(entity.tableId);
    }

    
    if (entity.createBy){
        entity.createBy = ObjectId(entity.createBy);
    }

    
    if (entity.modifyBy){
        entity.modifyBy = ObjectId(entity.modifyBy);
    }

}