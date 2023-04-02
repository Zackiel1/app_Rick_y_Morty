const express = require('express');
const router = require('./index.js');
const cors = require('cors');
const { sequelize } = require('../DB_connection')

const server = express();
const PORT = 3001;

server.use(cors());
server.use(express.json());
server.use('/rickandmorty', router);

sequelize.sync().then(() => {
   server.listen(PORT, () => {
      console.log('Server raised in port ' + PORT);
   })
});

