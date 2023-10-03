const mongoose = require('mongoose'),
        bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  firstname:{
    type:String
  },
  lastname:{
    type:String
  },
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
    lowercase: true,
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
  adresse:{
    type:String,
    required:true,
    default:''
    },
  active:{
    type:Boolean,
    required:true,
    default:true
    }
});


const User = mongoose.model('user', userSchema);

module.exports = User;