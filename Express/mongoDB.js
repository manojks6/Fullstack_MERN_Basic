 const mongoose=require('mongoose')
 const connectDB=async()=>{
      try{
           const connect =await mongoose.connect("mongodb+srv://root:root@cluster0.w7cb3jx.mongodb.net/Contacts?retryWrites=true&w=majority");
           console.log("Mongo Connected");
          //  console.log(connect.Connection);
      }
      catch(err){
           console.log(err);
           process.exit(1);
      }
 };
// const mongoose=require('mongoose')
// const connectDB=async()=>{
// mongoose.connect("mongodb+srv://root:root@cluster0.w7cb3jx.mongodb.net/Contacts?retryWrites=true&w=majority")
// const con=mongoose.connection;
// con.on('connected',()=>{
//      console.log("MongooDb connected");
// })
// con.on('disconnected',()=>{
//      console.log("MongooDb Disconnected");
// })
// con.on('error',()=>{
//      console.log("MongooDb Error!");
// })
// }
module.exports=connectDB;
