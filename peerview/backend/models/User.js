import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationNumber:{type:String,required:true},
  isAdmin: { type: Boolean, default: false },
  avatar: { type: String },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
