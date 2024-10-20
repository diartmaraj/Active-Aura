import express from 'express';
import {
  createBrand,
  getBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
} from '../controllers/brand.controller.js';
import{ uploadSingle } from '../middleware/upload.js';

const router = express.Router();

const setBrandUploadType = (req, res, next) => {
    req.uploadType = 'brand';
    next();
  };

router.post('/brands/add', setBrandUploadType, uploadSingle, createBrand);
router.get('/brands/get', getBrands);
router.get('/brands/get/:id', getBrandById);
router.put('/brands/:id',setBrandUploadType, uploadSingle, updateBrand);
router.delete('/brands/delete/:id', deleteBrand);

export default router;
