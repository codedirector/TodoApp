const mongoose=require("mongoose");

const connectDB=async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/todo");
        console.log("connected");
    }
    catch(error)
    { 
     console.error(error.message);
    }
}
module.exports=connectDB;