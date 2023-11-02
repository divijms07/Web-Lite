import express from "express";
import { verifytoken } from "../middleware/jwt.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controller/review.controller.js";

const router = express.Router();

router.post("/", verifytoken, createReview )
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview)

export default router;