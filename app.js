//importuj express
const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//instancja expresa
const app = express();

//ładuję zmienne środowiskowe do połącznia się z bazą
require('dotenv').config();

//łączę się z bazą
mongoose.connect(
 `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ndlws.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
);


//parsuję część body
app.use(bodyParser.json());

//logger
app.use(morgan('combined'));

//import routów
const productsRoutes = require('../api/routes/products');

//routy  localhost:3000/products
app.use('/products', productsRoutes);

//routy
app.use((req, res, next) => {
res.status(200).json({wiadmosc: "wszystko śmiga "});
})

module.exports = app;

