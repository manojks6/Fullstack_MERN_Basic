import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Display.css";
const Display = () => {
   const [d, setData] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:8000/contacts/").then((res) => {
            setData(res.data);
         }).catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div>
         <table>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            {d.map((item) => (
               <p className="main">
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
               </p>
            ))}
         </table>
      </div>
   );
};

export default Display;
