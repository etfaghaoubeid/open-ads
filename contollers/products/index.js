const Product = require('../../models/product');
exports.createProduct = async (req, res)=> {
    const { name, description, price } = req.body;
    const newProduct = {
        name,
        description,
        price
        
    }
    try {
        const product = await Product.create(newProduct);
        const savedProduct = await product.save();
        return res.status(201).json(savedProduct);
        
    } catch (error) {
        console.log(error)
        
    }
}
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        if (products.length > 0) {
            return res.status(200).json(products);
            
        } else {
            return res.status(200).json([]);  
        }
        
    } catch (error) {
        console.log(error)
        
    }
}
exports.getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByPk(id);
        if (product) {
            return res.status(200).json(product);
            
        } else {
            return res.status(200).json({message:'product does not exist'});  
        }
        
    } catch (error) {
        console.log(error)
        
    }
}
exports.updateProduct =  async (req, res) => {
    const id = req.params.id
    const {name , description, price} = req.body
    try {
        const product = await Product.findByPk(id);
        if (product) {
            product.name = name || product.name;
            product.description = description || product.description
            product.price = price || product.price
            const updateProduct =await product.save()
            return res.status(200).json(updateProduct);
        } else {
            return res.status(200).json({message:'product does not exist'});  
        }
        
    } catch (error) {
        console.log(error)
        
    }
}
exports.deleteProduct= async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findByPk(id);
        if (product) {
            await product.destroy()
            
            return res.status(200).json({ message: 'product deleted' });
        } else {
            return res.status(200).json({message:'product does not exist'});  
        }
        
    } catch (error) {
        console.log(error)
        
    }
}

