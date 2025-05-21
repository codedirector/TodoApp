const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const connectDB=require("./config/db");
const auth=require("./routes/auth")
const todo=require("./routes/todo")
const app=express();

app.use(express.json());
app.use(cors());
connectDB();
app.use("/auth",auth);
app.use("/todo",todo);
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});
const port=5000;
app.listen(port,()=>console.log("server running at port 5000"));
