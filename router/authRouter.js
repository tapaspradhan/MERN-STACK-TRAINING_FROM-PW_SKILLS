const express=require("express")
const authRouter=express.Router()

const {signup}=require("../controller/authController.js")

authRouter.post("/signup",signup)

module.exports=authRouter;