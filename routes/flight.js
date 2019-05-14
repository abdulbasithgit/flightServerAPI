const express = require('express');
const route = express.Router();
const path = require('path');
var productsLists = require('../flight.json');

    route.use((req,res,next)=>{
        next();
    })

    route.get('/', function (req, res) {    
        var productsList = productsLists;
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.send(productsList);
    });

module.exports = route;