
const User = require("../models/User");



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
//Create token
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id,username) => {
  return jwt.sign({ 
    id,
    username }, 
    'net ninja secret', {
    expiresIn: maxAge
  });
};

// GET exports

module.exports = {
    signup_get : (req, res) => {
        const ref=req.query.ref
        if(ref){
          res.render('signup',{ref});
          }else
          res.render('signup',{ref:''});
        
        },

    login_get : (req, res) => {
            const message=""
          
          
            res.render('login',{message});
          
        },

    logout_get = (req, res) => {
        res.cookie('jwt', '', { maxAge: 1 });
        res.redirect('/');
        }
}


// POST exports
module.exports = {
    signup_post = async (req, res) => {
        const {username, email, password,ref } = req.body;
        var refer = "unknown"
        try {
          const alreadyUsern= await User.findOne({username});
          const alreadyUser=await User.findOne({email});
          const salt = await bcrypt.genSalt();
          const hashedpassword = await bcrypt.hash(password, salt);
      
          if(!alreadyUsern ){
            if(!alreadyUser){
            if(ref)
            {
            const userRef = await User.findOne({ username:ref})
            if(userRef){
             refer=userRef.username;
             userRef.refnbr++;
             userRef.save();
                       }          
            }
                const now = new Date();
                const value = date.format(now,'MM-YYYY');
                const user = await User.create({username, email,password: hashedpassword,ref:refer,date:value});
                 refer='unknown';
                 const earningStats = await helper.createEarningsStats(user.id);
                 res.status(201).json({ user: user._id });
              }
              else{
                throw Error('email exists already');
      
              }
      
        }
        else{
          throw Error('username exists already');
        }
        }
        catch(err) {
      
          const errors =handleErrors(err);
          console.log(err)
          res.status(400).json({ errors });
        }
       
      },

    login_post = async (req, res) => {
        const { email, password } = req.body;
        try {
          const user = await User.login(email, password);
          const token = createToken(user._id,user.username);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(200).json({ user: user._id });
        } 
        catch (err) {
          const errors = handleErrors(err);
          res.status(400).json({ errors });
        }
      
      }
}

