
const { db, Vegetable } = require('./models');



const vegetables = [
  {
  name : 'broccolo',
  color : 'green',
  planted_on : Date.now()
},
{
  name : 'eggplant',
  color : 'purple',
  planted_on : Date.now()
},
{
  name : 'beet',
  color : 'red',
  planted_on : Date.now()
},
{
  name : 'carrots',
  color : 'orange',
  planted_on : Date.now()
}
]

function seedVeggies () {
  const vegPromises = [];
  vegetables.forEach((veggie) => {
    const veggiePromise = Vegetable.create(veggie);
    vegPromises.push(veggiePromise);
  });
  return Promise.all(vegPromises);
}





db.sync({force: true})
  .then(() => {
    return seedVeggies();
  })
  .then((results) => {
    console.log(results);
    console.log('Database synced!')
    db.close()
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    db.close()
  })







