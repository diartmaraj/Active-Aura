import Brand from '../models/brand.model.js';




export const createBrand = async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file.path; // Path to the uploaded image
    const brand = new Brand({ name, description, image });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    console.error('Error creating brand:', error);
    res.status(500).json({ message: 'Error creating brand', error });
  }
};


// Update a brand
export const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const image = req.file ? req.file.path : undefined; // Check if a new image is uploaded
    const updateData = { name, description };
    if (image) updateData.image = image;
    const brand = await Brand.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }
    res.status(200).json(brand);
  } catch (error) {
    console.error('Error updating brand:', error);
    res.status(500).json({ message: 'Error updating brand', error });
  }
};


// Get all brands
export const getBrands = async (req, res) => {
    try {
      const brands = await Brand.find();
      res.status(200).json(brands);
    } catch (error) {
      console.error('Error fetching brands:', error);
      res.status(500).json({ message: 'Error fetching brands', error });
    }
  };
  
  // Get a single brand by ID
  export const getBrandById = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findById(id);
      if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
      }
      res.status(200).json(brand);
    } catch (error) {
      console.error('Error fetching brand:', error);
      res.status(500).json({ message: 'Error fetching brand', error });
    }
  };

  // Delete a brand
export const deleteBrand = async (req, res) => {
    try {
      const { id } = req.params;
      const brand = await Brand.findByIdAndDelete(id);
      if (!brand) {
        return res.status(404).json({ message: 'Brand not found' });
      }
      res.status(200).json({ message: 'Brand deleted' });
    } catch (error) {
      console.error('Error deleting brand:', error);
      res.status(500).json({ message: 'Error deleting brand', error });
    }
  };