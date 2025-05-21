const mongoose=require("mongoose");

const todo= new mongoose.Schema({
    title:{
        type:String,
      required:true
    },
    completed:{
        type:Boolean,
        required:true
    },
    email:{
        type:String,
      required:true
    }
});

module.exports=mongoose.model("todo",todo);