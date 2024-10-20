// mockDataRoutes.js

import express from 'express';
import { colors, sizes, materials, gender, availability, discounts, ratings } from '../mockData/mockData.js';

const router = express.Router();

router.get('/filters/colors', (req, res) => {
  res.json(colors);
});

router.get('/filters/sizes', (req, res) => {
  res.json(sizes);
});

router.get('/filters/materials', (req, res) => {
  res.json(materials);
});

router.get('/filters/gender', (req, res) => {
  res.json(gender);
});

router.get('/filters/availability', (req, res) => {
  res.json(availability);
});

router.get('/filters/discounts', (req, res) => {
  res.json(discounts);
});

router.get('/filters/ratings', (req, res) => {
  res.json(ratings);
});

export default router;
