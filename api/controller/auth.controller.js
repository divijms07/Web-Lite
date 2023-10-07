import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register =async(req,res,next) =>{
    try{
        const hash=bcrypt.hashSync(req.body.password,5)
        const newUser= new User({
            ...req.body,
            password:hash,
        });

        await newUser.save();
        res.status(201).send("user has been created.");
    }catch(err){
        next(err)
    }
};

export const login =async(req,res,next) =>{
    try {
        const user =await User.findOne({ username: req.body.username });
        const err =new Error()
        err.status =404
        err.message ="User not found !"
        if(!user) return next(err);

        const isCorrect =bcrypt.compareSync(req.body.password,user.password);
        if(!isCorrect) return res.status(400).send("Wrong password or username!");

        const secretkey="944e8896ba383d01fe3ac772002ad349";
        const token = jwt.sign(
            {
              id: user._id,
              isSeller: user.isSeller,
            },secretkey);

            const { password, ...info } = user._doc;
            res.cookie("accessToken", token, {
                httpOnly: true,
              })
              .status(200)
              .send(info);
          } catch (err) {
            res.status(500).send("Something went wrong !")

          }
        
    };
export const logout =async(req,res) =>{

}