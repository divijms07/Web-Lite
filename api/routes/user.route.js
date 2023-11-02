import express from "express";
import { deleteUser,getUser } from "../controller/user.controller.js";
import { verifytoken } from "../middleware/jwt.js";
const router=express.Router()

router.delete("/:id",verifytoken,deleteUser);
router.get("/:id", getUser);

export default router;