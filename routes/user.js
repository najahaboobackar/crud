import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router =express.Router();
const users=[{
    fisrtName:"Jon",
    lastName:"doe",
    age:"40"

}]
// all routing starts with / userss
router.get("/",(req,res)=>{
    console.log(users)
    res.send("heello")
});
router.post("/",(req,res)=>{
    const user=req.body;
    const userid=uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const userWithid={... user,id :userid}
   
   users.push(user);
    res.send(`user to add ${user.fisrtName} added to database`);
})
export default router;