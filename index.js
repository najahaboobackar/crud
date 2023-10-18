import express from "express";
import bodyParser from "body-parser";
import  usersRouters from "./routes/user.js"
const app=express();
const PORT=5000;
app.use(bodyParser.json());  //middleware this shows we use json data in our whole applications
app.use('/users',usersRouters)
app.get('/',(req,res)=>{res.send("hello from homepage")});
app.listen(PORT,()=>console.log(`server running on http://localhost:${PORT}`))