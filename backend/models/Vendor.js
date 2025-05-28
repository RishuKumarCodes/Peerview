import mongoose from "mongoose";
import Review from "./Review.js"; 

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vendor name is required"],
    minlength: [2, "Vendor name must be at least 2 characters"],
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  avatar: {
    type: String,
    validate: {
      validator: function (v) {
        return !v || /^https?:\/\/.+\..+/.test(v);
      },
      message: "Invalid URL for avatar",
    },
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
