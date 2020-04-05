const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require("mongoose");

const productRoutes = require('./api/routes/products');
mongoose.connect('mongodb+srv://Prashant:prashant340@cluster0-igmbp.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });
// '+ process.env.MONGO_ATLAS_PW +'

mongoose.Promise = global.Promise;
// mongoose.connect(mongodb+srv://@clusterAnything.mongodb.net/test?retryWrites=true&w=majority, { user: process.env.MONGO_USER, pass: process.env.MONGO_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, DELETE, POST , GET');
        return res.status(200).json({});
    }
next();
});

app.use('/products', productRoutes);

module.exports = app;
