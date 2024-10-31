const express = require('express');
const multer = require('multer');
const path = require('path');
const foodController = require('../controllers/foodController');

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/images/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage: storage });

router.post('/foods', upload.single('image'), foodController.createFood);
router.get('/foods', foodController.getAllFoods);

module.exports = router;
