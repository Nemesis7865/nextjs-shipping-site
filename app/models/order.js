const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.TypesObjectId, ref: 'User', required:true},
    products: [{productId: String, quantity: Number}],
    shippingAddress: String,
    status: { type: Date, default: Date.now},
});

export default mongoose.models.order || mongoose.models('order,', orderSchema);