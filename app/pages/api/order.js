import connectDB from '../../lib/db';
import Order from '../../models/order';

const handler = async (req, res) => {
  await connectDB();

  if (req.method === 'POST') {
    const { userId, products, shippingAddress } = req.body;

    if (!userId || !products || !shippingAddress) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
      const newOrder = await Order.create({ userId, products, shippingAddress });
      res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error creating order' });
    }
  } else if (req.method === 'GET') {
    const orders = await Order.find();
    res.status(200).json({ success: true, orders });
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
};

export default handler;
