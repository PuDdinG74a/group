const User = require('../models/User');

// ฟังก์ชันการสมัครสมาชิก
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ฟังก์ชันการเข้าสู่ระบบ
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email, password: req.body.password }
    });
    if (!user) {
      return res.status(404).json({ message: 'email หรือ password ไม่ถูกต้อง' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
