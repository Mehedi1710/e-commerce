const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    store: {
        type: String,
        required: true
    },
    variants: [{
        type: mongoose.Types.ObjectId,
        ref: "Variants"
    }]
}, {timestamps: true});

const Product = mongoose.model('ProductList', productSchema);
module.exports = Product;