const express = require('express')
const app = express()

// TODO: change connected db name
const mongoose = require('mongoose');

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))


// configure CORS
const CLIENT_URL = process.env.CLIENT_URL
// const remote_client = "http://wbdv-sp21-final-p-client-react.herokuapp.com"
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', CLIENT_URL);
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// configure HTTP body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

require("./controllers/users-controller")(app)
require("./controllers/drinks-controller")(app)
require("./controllers/products-controller")(app)
require("./controllers/order-controller")(app)

app.listen(process.env.PORT || 4000)