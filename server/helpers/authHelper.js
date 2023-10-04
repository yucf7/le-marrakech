const User = require('../models/User');

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