import { registerSchema,loginSchema } from "../validators/userValidator.js";
import {Router} from "express";
import {validate} from "../middleware/zodValidator.js";
import { loginUser,registerUser } from "../controllers/UserController.js";

const userRouter = Router();


userRouter.post('/register',validate(registerSchema),registerUser);
userRouter.post('/login',validate(loginSchema),loginUser);

export default userRouter;