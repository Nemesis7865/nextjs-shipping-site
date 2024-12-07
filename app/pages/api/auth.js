import connectDB from '../../lib/db';
import User from '../../models/user';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
  await connectDB();

  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'User already exists.' });
      }

      const newUser = new User({ name, email, password });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.status(201).json({ success: true, token });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};

export default handler;
