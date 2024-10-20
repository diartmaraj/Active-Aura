import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }]
});

export const Category = mongoose.model('Category', categorySchema);
export default Category;
