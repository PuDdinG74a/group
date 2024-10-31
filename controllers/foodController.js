const FoodItem = require('../models/FoodItem');

// เพิ่มข้อมูลอาหาร
exports.createFood = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const image = req.file ? req.file.filename : null;

    const foodItem = await FoodItem.create({ name, description, price, categoryId, image });
    res.status(201).json(foodItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ดึงข้อมูลอาหารทั้งหมด
exports.getAllFoods = async (req, res) => {
  try {
    const foods = await FoodItem.findAll();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
