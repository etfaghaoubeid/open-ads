const Car = require('../../models/car');

exports.createCar = async (req, res) => {
    const {
        brand,
        model,
        price,
        image,
        year,
        color,
        fuel,
        location,
        description } = req.body;
    const newCar = {
        brand,
        model,
        price,
        image,
        year,
        color,
        fuel,
        location,
        description
    }
    try {
        const car = await Car.create(newCar);
        const savedCar = await car.save();
        return res.status(201).json(savedCar);
    } catch (error) {
        console.log(error);
        
    }
    
}

exports.getCar = async (req, res) => {
    console.log("getCars request")
    const { id } = req.params
    console.log(id)
    try {
        const car = await Car.findByPk(id); 
        if (car) {
            return res.status(200).json(car);
        } else {
            return res.status(204).json({ message: 'no content for this request' });
        }
        
    } catch (error) {
        console.log(error.message);
        
    }
    
}

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        if (cars.length>0) {
            return res.status(200).json(cars)
        } else {
            return res.status(200).json([])
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

exports.updateCar = async (req, res) => {
    const { id } = req.params;
    const {
        brand,
        model,
        price,
        image,
        year,
        color,
        fuel,
        location,
        description } = req.body;
    try {
        const car = await Car.findByPk(id);
        if (car) {
            car.brand = brand || car.brand;
            car.model = model || car.model;
            car.price = price || car.price;
            car.image = image || car.image;
            car.year = year || car.year;
            car.color = color || car.color;
            car.fuel = fuel || car.fuel;
            car.location = location || car.location;
            car.description = description || car.description;
            const updateCar = await car.save()
            return res.status(202).json(updateCar)
        } else {
            return res.status(204);
        }
        
        
    } catch (error) {
        console.log(error.message);
        
    }
}

exports.deleteCar = async (req, res) => { 
    const { id } = req.params; 
    try {
        const carToDelete = await Car.findByPk(id);
        if (carToDelete) {
            await carToDelete.destroy();
            return res.status(204).json({message:'resource deleted successful'})
        } else {
            return res.status(204).json({ message: 'no ressource to delete' });
        }
        
    } catch (error) {
        console.log(error);
    }
}