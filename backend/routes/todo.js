const Todo=require("../models/Todos");
const verifytoken=require("../middleware/verifytoken");
const JWT=require("jsonwebtoken");
const express=require("express");

const router=express.Router();

router.get('/',verifytoken,async(req,res)=>{
     
try{const todos=await Todo.find({email: req.user.email});
res.json(todos);}
catch(error)
{
  res.status(400).send("Error fetching todos");
}
});

router.post('/',verifytoken,async (req,res) => {
   const {title}=req.body;
   const email=req.user.email;
   const completed=false;
   try{
    const newTodo=new Todo({title,completed,email});
    await newTodo.save();
   res.send("todo Added");
   }
   catch(error){
    res.status(400).send("Todo not added");
   }
});
router.put("/:id", verifytoken, async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id, email: req.user.email });
  if (!todo) return res.status(404).send("Todo not found");

  todo.completed = !todo.completed;
  await todo.save();
  res.send("Todo updated");
});

router.delete("/:id",verifytoken,async(req,res)=>{
      await Todo.deleteOne({ _id: req.params.id, email: req.user.email });
  res.send("Todo deleted");
});
module.exports=router;
