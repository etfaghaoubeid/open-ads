const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utils/db')
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
    },
    name: {
        type: DataTypes.STRING, 
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    }
})


module.export = User