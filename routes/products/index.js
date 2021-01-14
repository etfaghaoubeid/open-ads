const {Router} = require('express');
const { getProducts } = require('../../contollers/products');

const router = Router();
router.get('/', getProducts);
module.exports = router;