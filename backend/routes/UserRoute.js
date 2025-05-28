import { registerSchema,loginSchema } from "../validators/userValidator.js";
import {Router} from "express";
import {validate} from "../middleware/zodValidator.js";
import { loginUser,registerUser,getUser,updateUser,deleteUser } from "../controllers/UserController.js";
import authenticate from "../middleware/authMiddleware.js";




const userRouter = Router();


userRouter.post('/register',validate(registerSchema),registerUser);
userRouter.post('/login',validate(loginSchema),loginUser);
userRouter.get('/getUser',authenticate,getUser);
userRouter.put('/updateUser',authenticate,updateUser);
userRouter.delete('/deleteUser',authenticate,deleteUser);

export default userRouter;