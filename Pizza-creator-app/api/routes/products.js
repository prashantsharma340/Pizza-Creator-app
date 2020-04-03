const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');

// router.get('/',(req, res, next) => {
//     res.status(200).json({
//         message: 'Handling Get requests'
//     });
// });

router.post('/',(req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     address: req.body.address
    // };
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        address: req.body.address,
        pincode: req.body.pincode,
        phone_no: req.body.phone_no,
        pizza_base: req.body.pizza_base,
        pizza_size: req.body.pizza_size,
        toppings: req.body.toppings
        //toppings ki array

    });
    product.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));

    res.status(201).json({
        message: 'Handling Post requests',
        product : product
    });
});

// router.get('/:productId' , (req, res, next) => {
//     const id = req.params.productId;


// }) ;

module.exports = router;
