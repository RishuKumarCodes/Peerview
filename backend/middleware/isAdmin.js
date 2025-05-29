import User from "../models/User.js";


const isAdmin = async(req, res, next) => {
  const admin = await User.findById(req.user.userId);
  if (!admin) {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }
  next();
};

export default isAdmin;
