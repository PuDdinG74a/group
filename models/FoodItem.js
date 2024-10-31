const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./Category');

const FoodItem = sequelize.define('FoodItem', {
  foodId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true },
  categoryId: { type: DataTypes.INTEGER, references: { model: Category, key: 'categoryId' }}
});

module.exports = FoodItem;
