const express=require('express')
const app=express()
const port=8000
const mongo=require('./mongoDB')
const cors=require('cors')
mongo();
app.listen(port,(req,res)=>{
     console.log(`Listining in ${port}`);
});
const routs=require('./Routs');
app.use(cors())
app.use(express.json());
app.use('/contacts',routs);
app.use(require('./errorHandler'))
