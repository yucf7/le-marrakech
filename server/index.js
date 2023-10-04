const express = require('express'),
    bodyParser=require('body-parser'),
        cookieParser = require('cookie-parser'),
            app = express(),
                port = process.env.PORT || 4000;

const authRoutes = require('./routes/authRoutes'),
        mainRoutes = require('./routes/mainRoutes'),
            db_init = require('./db/db_init');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.json());

// route
app.use(authRoutes);
app.use(mainRoutes)


try {
    app.listen(port, async () => {
        await db_init.connect();
        console.log('\n---------------\n')
        console.log(`Server listening on port ${port}`);
        console.log('\n---------------\n')

        });
} catch (error) {
    console.log("Not Running: ",error);
}


