const express = require('express'),
    bodyParser=require('body-parser'),
        cookieParser = require('cookie-parser'),
            app = express(),
                port = process.env.PORT || 4000;

const authRoutes = require('./routes/authRoutes')

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json());

// route
app.use(authRoutes)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });