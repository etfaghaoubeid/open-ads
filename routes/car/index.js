const { Router } = require('express');
const { createCar, getCar, getAllCars, deleteCar, updateCar } = require('../../contollers/car');
const router = Router();
router.post('/create-new-car', createCar);
router.put('/:id', updateCar);
router.get('/:id', getCar);
router.delete('/:id', deleteCar);
router.get('/', getAllCars);

module.exports = router;