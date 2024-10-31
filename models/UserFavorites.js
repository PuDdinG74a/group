const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const FoodItem = require('./FoodItem');

const UserFavorites = sequelize.define('UserFavorites', {
  favoriteId: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, references: { model: User, key: 'userId' }},
  foodId: { type: DataTypes.INTEGER, references: { model: FoodItem, key: 'foodId' }}
});

module.exports = UserFavorites;
