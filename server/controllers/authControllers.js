
const User = require("../models/User");
const authHelper = require('../helpers/authHelper');



// handling errors
const handleErrors = (err) => {
  let errors = { username:'' ,email: '', password: '' };

  if (err.message === 'incorrect username') {
  errors.email = 'There is no account with this username !';
}

if (err.message === 'disabled') {
  errors.email = 'You account is disabled !';
}

if (err.message === 'incorrect email') {
    errors.email = 'There is no account with this email !';
  }


  if (err.message === 'incorrect password') {
    errors.password = 'Password Is Incorrect';
  }


  if (err.code === 11000 && stringify(err.keyPattern)==="username=1") {
    errors.username = 'Username Already Exists';
    return errors;
  }

  if (err.code === 11000 && stringify(err.keyPattern)==="email=1" ) {
    errors.email = 'Email Already Exists';
    return errors;
  }

   if (err.message=="username exists already") {
    errors.username = 'Username Already Exists';
    return errors;
  }

    if (err.message=="email exists already") {
      errors.email = 'Email Already Exists';
      return errors;
    }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
    
      errors[properties.path] = properties.message;
    });
  }

 

  return errors;
}




// POST exports
module.exports = {
    signup_post : async (req, res) => {
       const user = req.body;

       authHelper.signup(user)
       .then((user)=> {
          const token = authHelper.createToken(user.id, user.username)
          res.status(201).json({user, token});
       })
       .catch((error)=>{
        res.status(204).json({error: error})
       })
      },

    login_post : async (req, res) => {
        const { email, password } = req.body;
        authHelper.login(email, password)
        .then((user)=> {
          const token = authHelper.createToken(user.id, user.username)
          res.status(201).json({user, token});
        }).catch((error)=>{
          res.status(204).json({error})
        })
      
      }
}

