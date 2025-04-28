import React, { useEffect, useState } from "react";
import './DashBoard.css'
import axios from "axios";
import {Link} from 'react-router-dom'

const DashBoard = () => {

   const [users,setUsers] = useState([])

   useEffect(()=>{
      const  getUsers = async()=>{
        try {
         const responce = await axios.get("http://localhost:8000/users");
         setUsers(responce.data)
        } catch (error) {
          console.log(error.message)
        }
     
  } 
  getUsers()
   },[])
   
   
async function deleteUser(id) {
   await axios.delete(`http://localhost:8000/users/${id}`)
   .then((responce)=>{
    console.log(responce)
   })
  .catch((error)=>{
  console.log(error)
  })
}
  
  return (
    <div className="table-container">
                <h1>CRUD-APPLICATION USING MERN STACK</h1>
      <div className="table-box">
        <table className="table">
          <thead>
            <tr>
            <td>S.no</td>
              <td>Name</td>
              <td>Email</td>
              <td>Contact</td>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,i)=>{
                return(
              <tr key={i}>
                <th>{i+1}</th>
              <th>{user.fullName}</th>
              <th>{user.Email}</th>
              <th>{user.contact}</th>
              <th>
               <Link to={`/users/id`}> <button  className="btn btn-primary">Edit</button></Link>
                <button onClick={()=>deleteUser(user.id)} className="btn btn-danger">Delete</button>
              </th>
            </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
