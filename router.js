'use strict';

const express   = require('express');
const Router    = express.Router;
const controller  = require('./controller');

let router      = new Router();

router.get('/', function (request, response) {
    let connection = request.app.get('mongo.connection');
    connection.collections(function (error, result) {
        response.json(result);
    });
});

router.get('/test', controller.Test.getTest);

router.post('/answer', controller.Test.postAnswer);

module.exports = router;