import mongoose from 'mongoose';
import Review from './Review.js';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  avatar: { type: String },
}, { timestamps: true });


userSchema.pre("remove", async (next) => {

  try {
    await Review.deleteMany({ user: this._id });
    next();
  } catch (err) {
    next(err);
  }

})
export default mongoose.model('User', userSchema);
