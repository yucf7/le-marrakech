const mongoose = require('mongoose');
const Meal = require('../models/Meal');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'meals.json');

const {
    DB_HOST,
    DB_PORT,
    DB_NAME,
  } = process.env;
  
const dbURL=`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports.connect = async () =>{
    mongoose.connect(dbURL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
    })
        .then((result) =>{
            console.log('connected to mongo')
        }) 
        .catch((err) =>{
            console.error('MongoDB connection error:',err);
    })
    
}
// this code to fill db with meals
module.exports.fillDataBase = async ()=>{
    try {
        const meals = await Meal.find({});
        if(!meals || !meals.length){
            const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
            const insertedMeals = await Meal.insertMany(jsonData);
            return insertedMeals;
        }
    } catch (error) {
        console.log('ERR ->filling DB: ' + error)
    }

}