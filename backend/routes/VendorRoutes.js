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

vendorRouter.post("/createVendor",authenticate,isAdmin,upload.single("avatar"), createVendor);
vendorRouter.get("/getVendor", getAllVendors);
vendorRouter.get("/getVendor/:id", getVendorById);
vendorRouter.put("/updateVendor/:id",authenticate,isAdmin,validate(vendorSchema), upload.single("avatar"), updateVendor);
vendorRouter.delete("/deleteVendor/:id",authenticate,isAdmin ,deleteVendor);

export default vendorRouter;
