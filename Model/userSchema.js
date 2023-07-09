const mongoose=require("mongoose")
const {Schema}=mongoose

const userSchema= new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        minLength:[5,"name must be 5 charactor "],
        maxLength:[50,"name must be 50 charactor "],
        trim:true
    },
    email:{
        type:String,
        required:[true,"user email is required"],
        unique:true,
        lowercase:true,
        unique:[true,"already registered"],
    },
    password:{
        type:String,
        select:false,
    },
    forgetPasswordToken:{
        type:String,
    },
    forgetPasswordExpiryDate:{
        type:Date,
    }
},{
    timestamps:true
})

const userModule=mongoose.model("user",userSchema)
module.exports=userModule;