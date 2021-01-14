const Sequelize = require('sequelize');
const db = require('../../utils/db');
const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull:false
    }
    
});
module.exports= Product
