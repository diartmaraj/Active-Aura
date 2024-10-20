import mongoose from 'mongoose';
import Review from './review.model.js';




const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: true },
    images: {
        type: [String], // This should be an array of strings
        required: true, // Adjust as necessary
    },
    description: { type: String },
    oldPrice: { type: String },
    price: { type: String, required: true },
    brand: { type: String },
    color: { type: String },
    size: { type: String },
    material: { type: String },
    gender: { type: String },
    available: { type: String },
    discount: { type: String },
    weight: { type: String },  // Useful for shipping and certain product categories
    dimensions: { type: String },  // Useful for certain product categories
    ingredients: { type: String },  // Useful for Beauty and Health products
    dosage: { type: String },  // Useful for Health products
    expiryDate: { type: Date },  // Useful for perishable items
    usageInstructions: { type: String },  // Useful for Beauty and Health products
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

productSchema.statics.calculateAverageRating = async function(productId) {
    const reviews = await Review.find({ product: productId });
    if (reviews.length === 0) return 0;

    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
};

export const Product = mongoose.model('Product', productSchema);
export default Product;
