const User = require('../models/User');
const Cart = require('../models/Cart');

const jwt = require('jsonwebtoken');

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const JWT_SECRET = process.env.JWT_SECRET;
module.exports.login = async (email, password) => {
    return new Promise(async (resolve, reject) => {
        const user = await User.findOne({ email });
        if (user) {
            user.password == password // cela veut dire que vous stockez le mdp en clair
                ? resolve(user)
                : reject(new Error('cant login'));
        }
    });
};

module.exports.signup = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            const createdUser = await User.create(user);
            createdUser
                ? resolve(createdUser)
                : reject('cant signup');
        } catch (error) {
            console.log(error);
            reject(error);
        }

    });
};

//Create token

module.exports.createToken = (id, email) => {
    try {
        const maxAge = 86400;
        return jwt.sign({
            id,
            email
        },
            JWT_SECRET, {
            expiresIn: maxAge
        });
    } catch (error) {
        console.log(error);
    }

};


module.exports.checkToken = (token) => {
    try {
        var decodedToken;
        jwt.verify(token, JWT_SECRET, (err, decToken) => {
            if (err) {
                return false;
            } else {
                decodedToken = decToken;
            }
        });

        return decodedToken;
    } catch (error) {
        console.log(error);
    }

};


module.exports.createUserCart = async (userId) => {
    try {
        const cart = await Cart.create(
            {
                user: userId,
                meals: []
            }
        );
        return cart;
    } catch (error) {
        throw new Error('failed to create cart: ' + error.message);
    }
};