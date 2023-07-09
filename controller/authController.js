const userModule = require("../Model/userSchema");

const signup=async(req,res,next)=>{
    const {name,email,password,confirmPassword}=req.body;
    console.log(name,email,password,confirmPassword);

    try {
        const userInfo=userModule(req.body)
        const result=await userInfo.save()

        res.status(200).json({
            success:true,
            result
        })
    } catch (e) {
        if(e.code===11000){
            return res.status(400).json({
                success:false,
                message:"Account already exist with provided email id"
            })
        }
        return res.status(400).json({
            success:false,
            message:e.message
        }) 
    }

    
}

module.exports={
    signup
}
