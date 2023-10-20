import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router =express.Router();
const users=[
    ];
// all routing starts with / userss
router.get("/",(req,res)=>{
    console.log(users)
    res.send("heello")
});
router.post("/",(req,res)=>{
    const user=req.body;
    const userid=uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const userWithid={... user,id :userid}
     users.push(userWithid);
    res.send(`user to add ${user.firstName} added to database`);
})
router.get('/:id',(req,res)=>{
    const {id }=req.params;
    const found=users.find((user)=>user.id===id)
    res.send(found);
})
export default router;