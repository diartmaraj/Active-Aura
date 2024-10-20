import SubCategory from '../models/subCategory.model.js';
import Category from '../models/category.model.js';

// Create a new subcategory
export const createSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const subCategory = new SubCategory({ name, category: categoryId });
    await subCategory.save();

    // Add the subcategory to the category's subcategories array
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    category.subcategories.push(subCategory._id);
    await category.save();

    res.status(201).json(subCategory);
  } catch (error) {
    console.error('Error creating subcategory:', error);
    res.status(500).json({ message: 'Error creating subcategory', error });
  }
};
// Get all subcategories
export const getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find().populate('category');
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subcategories', error });
  }
};

// Get a single subcategory by ID
export const getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await SubCategory.findById(id).populate('category');
    if (!subCategory) {
      return res.status(404).json({ message: 'Subcategory not found' });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subcategory', error });
  }
};
