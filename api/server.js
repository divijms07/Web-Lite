import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();

mongoose.set("strictQuery", true);
const connect = async () => {
    try {
      await mongoose.connect('mongodb+srv://ga8870920:mongo123@cluster0.y2z1imx.mongodb.net/?retryWrites=true&w=majority&dbname=fiverr');
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
  };

  app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
  app.use(express.json());
  app.use(cookieParser());
  
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/gigs", gigRoute);
  app.use("/api/orders", orderRoute);
  app.use("/api/conversations", conversationRoute);
  app.use("/api/messages", messageRoute);
  app.use("/api/reviews", reviewRoute);
  
  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });
  
  app.listen(8800, () => {
    connect();
    console.log("Backend server is running!");
  });