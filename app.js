const express=require('express')
const app=express();
const authRouter=require("./router/authRouter.js");
const databaseConnection = require('./config/databaseConfig.js');

databaseConnection();

app.use(express.json());
app.use("/api/auth/",authRouter)
app.use=("/",(req,res)=>{
    res.status(200).json({data:'JWTauth Server updates'});
})

module.exports=app;