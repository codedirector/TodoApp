const JWT=require("jsonwebtoken");
const SECRET_KEY="mysecretkey";

function verifytoken(req,res,next){
   const token=req.headers["authorization"];
   if(!token)
     res.status(401).send("Access Denied");
    try{
      const decode=JWT.verify(token,SECRET_KEY);
      req.user=decode;
         next();
    }
    catch(error){
      res.status(401).send("Access Denied");
    }
}
module.exports=verifytoken;