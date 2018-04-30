const Sequelize = require('sequelize');
const chalk = require('chalk');


console.log(chalk.yellow("Opening database connection"));

const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false,
});




const Gardener = db.define('gardener', {
  name : Sequelize.STRING,
  age : Sequelize.INTEGER
})





module.exports = db;
