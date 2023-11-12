const express = require('express');
const router = express.Router();
const imageDetails = require('../image/imageDetails');
const images = require('../image/image');

// GET - Display details for a specific image
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const image = images.find(img => img.id === id);
  const details = imageDetails[id];
  res.render('details', { image, details });
});

module.exports = router;
