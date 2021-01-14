const Sequelize = require('sequelize');

// const db = require('../utils/db/db')
const db = require('../utils/db')
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
    },
    name: {
        type: Sequelize.STRING, 
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports = User