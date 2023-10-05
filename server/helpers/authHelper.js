const User = require('../models/User');

const jwt = require('jsonwebtoken');

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const JWT_SECRET = process.env.JWT_SECRET;
module.exports.login = async (email, password) =>{
    return new Promise(async (resolve,reject)=>{
        const user = await User.findOne({email});
        if(user){
            user.password == password
            ?   resolve(user)
            :   reject (new Error ('cant login'))
        }
    })
} 

module.exports.signup = async (user) =>{
    return new Promise(async (resolve,reject)=>{
        try {
            const createdUser = await User.create(user)
                createdUser
                ?   resolve(createdUser)
                :   reject ('cant signup') 
        } catch (error) {
            reject(error)
        }

    })
} 

//Create token

module.exports.createToken = (id,username) => {
    try {
        const maxAge = 86400;
        return jwt.sign({ 
            id,
            username }, 
            JWT_SECRET, {
            expiresIn: maxAge
        });
    } catch (error) {
        console.log(error)
    }

};