import mongoose from 'mongoose';
import bcrypts from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    Date: { type: Date, required: Date.now()} ,
    role: {type: String, enum: ['admin', 'customer'], default: 'customer' },

});

// Hash password before saving
UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypts.gensalt(10);
    this.passwor = await bcrypts.hash(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypts.compare(enteredPassword, this.password)
};

export default mongoose.models.user || mongoose.model('User', UserSchema);