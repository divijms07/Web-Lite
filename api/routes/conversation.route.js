import express from "express";
import {
  createConversation,
  getConversations,
  getSingleConversation,
  updateConversation,
} from "../controller/conversation.controller.js";
import { verifytoken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", verifytoken, getConversations);
router.post("/", verifytoken, createConversation);
router.get("/single/:id", verifytoken, getSingleConversation);
router.put("/:id", verifytoken, updateConversation);

export default router;