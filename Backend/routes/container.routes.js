const express = require('express');
const router = express.Router();
const containerModel = require('../models/front.container');
const multer = require('multer');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

// Use memory storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST: Upload product
router.post('/add', isAuthenticated , isAdmin , upload.single('image'), async (req, res) => {
  try {
    const { name } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype
    };

    const newContainer = new containerModel({
      name,
      image,
      link: req.body.link 
    });

    await newContainer.save();

    res.status(201).json({ message: 'Conrainer added successfully' });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to add Container' });
  }
});

// GET: Fetch all products
router.get('/', async (req, res) => {
  try {
    const container = await containerModel.find();

    const formatted = container.map((p) => ({
      _id: p._id,
      name: p.name,
      link: p.link,
      image: p.image?.data
        ? `data:${p.image.contentType};base64,${p.image.data.toString('base64')}`
        : null,
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch container' });
  }
});


module.exports = router;
