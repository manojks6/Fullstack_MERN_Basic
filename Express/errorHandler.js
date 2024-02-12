const errorHandler=(err,req,res,next)=>{
     const statusCode=res.statusCode?res.statusCode:500;
     switch (statusCode) {
          case 400:
               res.json({title:"Validation Error",
               msg:err.message,
               stackTrace:err.stack
          });
          break;
          case 401:
               res.json({title:"Unauthorized access",
               msg:err.message,
               stackTrace:err.stack});
          break;
          case 403:
               res.json({title:"Forbidden",
               msg:err.message,
               stackTrace:err.stack});
          break;
          case 404:
               res.json({title:"Not Found",
               msg:err.message,
               stackTrace:err.stack});
          break;
          default:
               console.log("all is well(no Error)");
          break;
     }
}
module.exports=errorHandler;