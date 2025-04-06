const express=require("express");
const router=express.Router();
const Room=require('../models/room')
router.get("/getallrooms",async(req,resp)=>{
try{
    const rooms=await Room.find({});
    resp.send(rooms);
}
catch(error){
return resp.status(400).json({message:error});
}
});
module.exports=router;