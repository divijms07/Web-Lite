import express from "express";
import { deleteUser } from "../controller/user.controller.js";
import { verifytoken } from "../middleware/jwt.js";
const router=express.Router()

router.delete("/:id",verifytoken,deleteUser)

export default router;