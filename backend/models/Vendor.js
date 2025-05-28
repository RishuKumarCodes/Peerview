import mongoose from "mongoose";
import Review from "./Review.js"; 

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  location: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
     required:true
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

vendorSchema.pre("remove", async function (next) {
  await Review.deleteMany({ vendor: this._id });
  next();
});

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
