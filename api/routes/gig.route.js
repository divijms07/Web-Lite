import express from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs
} from "../controller/gig.controller.js";
import { verifytoken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifytoken, createGig);
router.delete("/:id", verifytoken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;