import express from 'express';
import { createCategory, getCategories, getCategoryById } from '../controllers/category.controller.js';

const router = express.Router();

router.post('/category/add', createCategory);
router.get('/category/get', getCategories);
router.get('/category/:id', getCategoryById);

export default router;
