'use strict';


const templateCtrl = require('./template.controller');

module.exports = exports = function (server){
    let name = 'tables';
   

    templateCtrl(server, name);
    

   
}