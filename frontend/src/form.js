import React, { useState } from 'react'
const Form = () => {
const HandleSubmit=(ev)=>{
     ev.preventDefault();
     console.log(name,email);
}
const[name,setName]=useState("");
const[email,setEmail]=useState(""); 
  return (
    <div>
      <form onSubmit={HandleSubmit}>
          <input type='text' name='name' onChange={(e)=>{setName(e.target.value)}}></input>
          <input type='text' name='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
          <button type='submit'>Click</button>
      </form>
    </div>
  )
}
export default Form;
