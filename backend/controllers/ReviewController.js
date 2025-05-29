import Review from "../models/Review.js";
import Vendor from "../models/Vendor.js";

const createReview = async (req, res) => {
  const { vendorId } = req.params;
  const { rating, comment } = req.body;

  try {
    const vendor = await Vendor.findById(vendorId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    const existingReview = await Review.findOne({
      vendor: vendorId,
      user: req.user._id,
    });

    if (existingReview) {
      return res.status(400).json({ message: "You already reviewed this vendor" });
    }

    const review = new Review({
      vendor: vendorId,
      user: req.user._id,
      rating,
      comment,
    });

    await review.save();

    res.status(201).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getVendorReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ vendor: req.params.vendorId }).populate("user", "name");
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    if (review.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this review" });
    }

    await review.deleteOne();
    res.status(200).json({ success: true, message: "Review deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createReview, getVendorReviews, deleteReview };
