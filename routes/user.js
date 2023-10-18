import express from 'express';
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
export default router;