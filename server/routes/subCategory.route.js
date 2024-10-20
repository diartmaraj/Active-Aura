import express from 'express';
import { createSubCategory, getSubCategories, getSubCategoryById } from '../controllers/subcategory.controller.js';

const router = express.Router();

router.post('/sub-category/add', createSubCategory);
router.get('/sub-category/get', getSubCategories);
router.get('/sub-category/get/:id', getSubCategoryById);

export default router;
