import { Router } from "express";
import {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
  deleteVendor
} from "../controllers/VendorController.js";
import upload from "../middleware/multerMiddleware.js";
import authenticate from "../middleware/authMiddleware.js";
import isAdmin from "../middleware/isAdmin.js";
import { vendorSchema } from "../validators/vendorValidator.js";
import {validate} from "../middleware/zodValidator.js";


const  vendorRouter = Router();

vendorRouter.post("/",authenticate,isAdmin,upload.single("avatar"), createVendor);
vendorRouter.get("/", getAllVendors);
vendorRouter.get("/:id", getVendorById);
vendorRouter.put("/:id",authenticate,isAdmin,validate(vendorSchema), upload.single("avatar"), updateVendor);
vendorRouter.delete("/:id",authenticate,isAdmin ,deleteVendor);

export default vendorRouter;
