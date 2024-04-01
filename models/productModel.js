const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'public/images'
    },
    description:{
        type: String,
        required: true
    },
    store: {
        type: mongoose.Types.ObjectId,
        ref: "Store"
    }
}, {timestamps: true});

const Product = mongoose.model('ProductList', productSchema);
module.exports = Product;