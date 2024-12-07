import mongoose from 'mongoose';

const connectDB = async () => {
    if (mongoose.conneciong.readyState >= 1) return;


    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
}

export default connectDB;