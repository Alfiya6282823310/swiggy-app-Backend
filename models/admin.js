const mongoose=require("mongoose")
const adminSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        username:{type:String,required:true},
        password:{type:String,required:true}
    }
)
const adminModel=mongoose.model("adminSignUp",adminSchema)
module.exports=adminModel