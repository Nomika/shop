const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//importujęmodel
const Product = require('../models/product');

//localhost:3000/products/products

router.get('/', (req, res, next) =>{
res.status(200).json({wiadomosc: "Lista wszystkich produktów"});
});

router.post('/', (req, res, next) =>{
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    })

product.save().then().catch();

    const product = {
        name: req.body.name,
        price: req.body.price,
    };
    res.status(201).json({
        wiadomosc: "Dodanie nowego produktu",
        info: product,
    });
});

router.get('/:id', (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'Szczegóły produktu o nr ' + id });
});

router.put('/:id', (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'Zmiana produktu o nr ' + id });
});

router.delete('/:id', (req, res, next) =>{
    const id = req.params.id;
    res.status(200).json({wiadomosc: 'Kasowanie produktu o nr ' + id });
});

module.exports = router;