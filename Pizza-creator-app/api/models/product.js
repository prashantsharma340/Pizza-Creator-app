const mongoose = require ('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId ,
    name: String,
    address: String,
    pincode: Number,
    phone_no: Number,
    pizza_base: String,
    pizza_size: String,
    toppings: Array
    
});

module.exports = mongoose.model('Product',productSchema)