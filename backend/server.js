import express from "express";
import dotenv from "dotenv";
import  connectDB from "./configs/db.js";
import userRouter from "./routes/UserRoute.js";
import vendorRouter from "./routes/VendorRoutes.js";
import reviewRouter from "./routes/ReviewRoute.js";

import cors from "cors";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3001;
connectDB();


app.use(express.json());
app.use(cors());

app.use('/api/user',userRouter);
app.use('/api/vendor',vendorRouter );
app.use('/api/reiview',reviewRouter);




app.listen(PORT,()=>console.log(`App listening on port ${PORT}`));