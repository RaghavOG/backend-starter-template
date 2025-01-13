import express from 'express';


const router = express.Router();    




router.get("/hello",(req,res)=>{
    res.status(200).json({message:"Hello from v1"})
})

export default router;