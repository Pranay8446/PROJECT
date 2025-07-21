const express = require('express');
const router = express.Router();
const productModel = require('../models/product.model');
const multer = require('multer');

// Use memory storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST: Upload product
router.post('/add', upload.single('image'), async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };

    const newProduct = new productModel({
      name,
      category, // ✅ Added category
      image
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await productModel.find();

    const formatted = products.map((p) => ({
      _id: p._id,
      name: p.name,
      category: p.category, 
      image: p.image?.data
        ? `data:${p.image.contentType};base64,${p.image.data.toString('base64')}`
        : null,
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});


module.exports = router;
