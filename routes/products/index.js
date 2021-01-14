const {Router} = require('express');
const router = Router();
const { createProduct,
    getAllProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../../contollers/products');

router.post('/create-poduct', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);






module.exports = router;