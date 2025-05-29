import express from "express";
import { createReview, getVendorReviews,deleteReview} from "../controllers/ReviewController.js";
import authenticate from "../middleware/authMiddleware.js";

const reviewRouter = express.Router();


reviewRouter.post("/:vendorId", authenticate, createReview);
reviewRouter.get("/:vendorId", getVendorReviews);
reviewRouter.delete("/delete/:reviewId", authenticate, deleteReview);

export default reviewRouter;
