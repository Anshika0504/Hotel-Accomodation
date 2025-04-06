const mongoose=require("mongoose");
var mongoURL="mongodb://localhost:27017/hotel"
mongoose.connect(mongoURL)
var connection=mongoose.connection
connection.on('error',()=>{
    console.log('Mongo DB connection failed');
})
connection.on('connected',()=>{
    console.log("mongo db connection successful");
})
module.exports=mongoose