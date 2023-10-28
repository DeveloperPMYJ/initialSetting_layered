const express = require("express");

const { productListRouter } = require('./productListRouter');

const router = express.Router();

router.use('/product', productListRouter);

module.exports = router;
