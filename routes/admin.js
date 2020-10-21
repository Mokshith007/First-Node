const path = require('path');
const isAuth=require('../middleware/is-auth')
const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.use(isAuth)

router.get('/add-product', adminController.getAddProduct);
// /admin/add-product => GET

// // /admin/products => GET
 router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
