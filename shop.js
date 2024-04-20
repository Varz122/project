
const express = require('express')
const router = express.Router();
const products = require('../controllers/product')

router.get('/', products.getprod)

  module.exports = router;