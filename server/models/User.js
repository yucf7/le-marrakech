const mongoose = require('mongoose'),
        bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  firstName:{
    type:String
  },
  lastName:{
    type:String
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
  address:{
    type:String,
    required:true,
    default:''
    }
});


const User = mongoose.model('user', userSchema);

module.exports = User;