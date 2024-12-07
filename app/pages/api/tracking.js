import connectDB from '../../lib/db';
import Order from '../../models/order';

const handler = async (req, res) => {
  await connectDB();

  const { orderId } = req.query;

  if (!orderId) {
    return res.status(400).json({ success: false, message: 'Order ID is required.' });
  }

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found.' });
    }

    res.status(200).json({ success: true, status: order.status });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching tracking info' });
  }
};

export default handler;
