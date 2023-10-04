const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;
const requireAuth = (req, res, next) => {
  const token = req.body.jwt; 

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(300);
      } else {
        next();
      }
    });
  } else {
    res.status(300);
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.body.jwt;

  if (!token) {
    res.status(401).json({ user: null, error: 'no token provided' });
    return;
  }

  jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      res.status(401).json({ user: null, error: 'token verification failed' });
      return;
    }

    try {
      const user = await User.findById(decodedToken.id);
      if (!user) {
        res.status(401).json({ user: null, error: 'User not found' });
        return;
      }

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ user: null, error: 'server error' });
    }
  });
};


//Check if user is logged in
const requireLogout = (req, res, next) => {
  const token = req.body.jwt; 

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (decodedToken) {
        res.status(300);

      } else {
        next();

      }
    });
  } else {
    next();
  }
};


module.exports = { requireAuth, checkUser,requireLogout };