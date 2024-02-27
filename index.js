import express from "express";
import db from "./db.js";
import dotenv from 'dotenv'
import cors from "cors";
import user from './route/userRoute.js'
import delivery from './route/DeliveryBoyRoute.js'
import resturant from './route/ResturantRoute.js'
import product from './route/ResturantRoute.js'
dotenv.config()
const app = express();
app.use(express.json())
db()
app.use(cors())
app.use("/api/user",user)
app.use("/api/delivery",delivery)
app.use("/api/resturant",resturant)
app.use("/api/product",product)
app.listen(process.env.PORT , ()=>{
    console.log(`runing on ${process.env.PORT}` )
})


