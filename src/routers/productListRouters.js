const express = require('express');

const { productListController} = require('../controllers');
// const { productListController } = require('../controllers/productListController');

const productListRouter = express.Router();

productListRouter.get('/readList', productListController. ); 

module.exports = { productListRouter}