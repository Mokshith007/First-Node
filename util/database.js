const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Mokshith@007', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
