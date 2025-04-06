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

router.post("/getroombyid",async(req,resp)=>{
    const roomid=req.body.roomid;
    try{
        const room=await Room.findOne({_id:roomid});
        resp.send(room);
    }
    catch(error){
    return resp.status(400).json({message:error});
    }
    });
module.exports=router;