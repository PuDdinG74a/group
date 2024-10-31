const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/images', express.static('public/images')); // แสดงภาพจากเซิร์ฟเวอร์

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
