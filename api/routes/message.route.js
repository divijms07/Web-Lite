import express from "express";
import {
  createMessage,
  getMessages,
} from "../controller/message.controller.js";
import { verifytoken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifytoken, createMessage);
router.get("/:id", verifytoken, getMessages);

export default router;