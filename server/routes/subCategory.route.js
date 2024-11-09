import express from 'express';
import { createSubCategory, deleteSubCategory, getSubCategories, getSubCategoryById } from '../controllers/subcategory.controller.js';

const router = express.Router();

router.post('/sub-category/add', createSubCategory);
router.get('/sub-category/get', getSubCategories);
router.get('/sub-category/get/:id', getSubCategoryById);
router.delete('/sub-category/delete/:id', deleteSubCategory);

export default router;
