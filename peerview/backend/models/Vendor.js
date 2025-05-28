import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category:{type:String,required:true},
  description:{type:String,required:true},
  location:{type:String,required:true},
  avatar: { type: String },
  featured:{type:Boolean,default:false}
}, { timestamps: true });

export default mongoose.model('User', userSchema);
