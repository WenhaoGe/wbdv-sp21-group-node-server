const express = require('express')
const app = express()

// TODO: change connected db name
const mongoose = require('mongoose');
const uri = "mongodb+srv://jiahao:QE8GMArISSgnWu22@cluster0.whqk6.mongodb.net/final-project?retryWrites=true&w=majority";
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true});

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))


// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', ['http://localhost:3000']);
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

app.listen(4000)