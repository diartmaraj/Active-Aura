const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String},
    category: { type: String},
    img: { type: String },
    oldPrice: { type: String },
    price: { type: String },
    rating: { type: Number },
    brand: { type: String },
    color: { type: String },
    size: { type: String },
    material: { type: String },
    gender: { type: String },
    available: { type: String },
    discount: { type: String }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
