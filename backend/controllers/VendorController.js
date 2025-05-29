import Vendor from "../models/Vendor.js";


const createVendor = async (req, res) => {
  try {
    const { name, category, description, location } = req.body;
    const file = req.file;
    
    if (!file) {
      return res.status(400).json({ message: "Avatar image is required" });
    }

    const url = file.path;

    const vendor = new Vendor({
      name,
      category,
      description,
      location,
      avatar: url,
    });

    await vendor.save();
    res.status(201).json({ success: true, vendor });
  } catch (error) {
    console.error("Create vendor error:", error);
    res.status(500).json({ message: error.message || "Server Error" });
  }
};


const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, vendors });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }
    res.status(200).json({ success: true, vendor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateVendor = async (req, res) => {
  try {
    const { name, category, description, location, featured } = req.body;

    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    if (req.file) {
      vendor.avatar = req.file.path;
    }

    vendor.name = name || vendor.name;
    vendor.category = category || vendor.category;
    vendor.description = description || vendor.description;
    vendor.location = location || vendor.location;
    vendor.featured = featured ?? vendor.featured;

    await vendor.save();

    res.status(200).json({ success: true, vendor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const deleteVendor = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    await vendor.remove();

    res.status(200).json({ success: true, message: "Vendor and related reviews deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createVendor,
  getAllVendors,
  getVendorById,
  updateVendor,
  deleteVendor
};
