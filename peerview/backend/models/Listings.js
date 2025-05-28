//for feature listing/paid listing

import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
  price: { type: Number },
  startDate: { type: Date },
  endDate: { type: Date },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Listing', listingSchema);
