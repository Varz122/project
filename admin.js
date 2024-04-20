
const express = require('express')
const router = express.Router();
const products = require('../controllers/product')

router.get('/add-product', products.addprod)

  router.post('/product', products.postaddprod)

module.exports = router;