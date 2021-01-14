const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.PASSWORD, 
     
    {
        host: process.env.HOST,
        port:process.env.DB_PRT,
        dialect: 'postgres'
    }
);  

module.exports = sequelize;
