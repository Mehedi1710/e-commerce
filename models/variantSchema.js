const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    storage: {
        type: Number
    },
    ram: {
        type: Number,
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    image: {
        type: String,
        default: ''
    },
    product: {
        type: String,
        required: true,
      }
}, {timestamps: true});

const Variant = mongoose.model('Variants', variantSchema);
module.exports = Variant;