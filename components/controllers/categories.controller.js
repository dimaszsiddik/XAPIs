'use strict';


const templateCtrl = require('./template.controller');

module.exports = exports = function (server){
    let name = 'categories';
   

    templateCtrl(server, name);

   
}