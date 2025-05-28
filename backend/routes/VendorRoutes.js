import express from "express";
import {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
  deleteVendor
} from "../controllers/VendorController.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.post("/", upload.single("avatar"), createVendor);
router.get("/", getAllVendors);
router.get("/:id", getVendorById);
router.put("/:id", upload.single("avatar"), updateVendor);
router.delete("/:id", deleteVendor);

export default router;
