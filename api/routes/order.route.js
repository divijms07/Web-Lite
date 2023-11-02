import express from "express";
import { verifytoken } from "../middleware/jwt.js";
import { getOrders, intent, confirm } from "../controller/order.controller.js";

const router = express.Router();

// router.post("/:gigId", verifytoken, createOrder);
router.get("/", verifytoken, getOrders);
router.post("/create-payment-intent/:id", verifytoken, intent);
router.put("/", verifytoken, confirm);

export default router;