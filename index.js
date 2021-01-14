const express = require('express');
require('dotenv').config();
const sequelize = require('./utils/db');
const app = express();
app.use(express.json());
// app.use('/users', require('./routes/users'));
app.use('/api/products',require('./routes/products'))

const PORT = process.env.PORT|| 3333
console.log('hello'); 
(async function bootstrap() {
    try {
        await sequelize.sync(
          { force: false } //Reset db every time
        );
        app.listen(PORT); //DEF in docker.compose.yml
      } catch (error) {
        console.log(error.message);
      }
    
    
})()