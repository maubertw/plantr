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



const Plot = db.define('plot', {
  size : Sequelize.INTEGER,
  shaded : Sequelize.BOOLEAN
})


const Vegetable = db.define('vegetable', {
  name : Sequelize.STRING,
  color : Sequelize.STRING,
  planted_on:Sequelize.DATE
})

// Gardener.belongsTo(Plot)
Plot.belongsTo(Gardener)

Vegetable.belongsToMany(Plot,{through:"vegetable_plot"})
Plot.belongsToMany(Vegetable,{through:"vegetable_plot"})

Gardener.belongsTo(Vegetable,{as: "favorite_vegetable"} )

module.exports = db;
