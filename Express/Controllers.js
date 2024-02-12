const expressHandler=require('express-async-handler');
const { error } = require('server/router');
const  Contact=require('./contactModel')

const getContacts=expressHandler(async (req,res)=>{
     const c=await Contact.find();
     res.json(c);
});

const createContact=expressHandler(async(req,res)=>{
     const {name,phone,email}=req.body;
     if(!name || !phone || !email){
          res.status(400);   
          throw new error("All filds are required")
     }
     Contact.insertMany([req.body]);
     res.status(201).json({Contact:req.body,msg:"Created"});
});

const getContact=expressHandler(async(req,res)=>{
     const c=await Contact.findById(req.params.id);
     if(!c){
          res.status(404);
          throw new Error("Contact Not found");
     }
     res.status(200).json(c);
});

const updateContact=expressHandler(async(req,res)=>{
     const c=await Contact.findById(req.params.id);
     if(!c){
          res.status(404);
          throw new Error("Contact Not found");
     }
     const updatedContact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.status(200).json({Contact:req.body,msg:"Updated"});
});

const deleteContact=expressHandler(async(req,res)=>{
     const c=await Contact.findById(req.params.id);
     if(!c){
          res.status(404);
          throw new Error("Contact Not found");
     }
     await Contact.findOneAndDelete({name:c.name,phone:c.phone,email:c.email});
     res.status(200).json({Contact:req.body,msg:"Deleted"});
});
module.exports={getContacts,getContact,createContact,deleteContact,updateContact};