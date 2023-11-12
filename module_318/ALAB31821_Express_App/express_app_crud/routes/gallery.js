const express = require('express');
const router = express.Router();
const images = require('../image/image');

// GET - Display the image gallery
router.get('/', (req, res) => {
  res.render('gallery', { images });
});

module.exports = router;
