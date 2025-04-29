import React,{useState} from "react";
import { Form , Button} from "react-bootstrap";
import './PostUser.css'  
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const  AddUser = ()=>{
    
     const users={
      fullName:"",
      Email:"",
      contact:"",
}

  const [user, setUser ]= useState(users)
 

 const navigate= useNavigate()


  const handerSubmit = async(e)=>{
    e.preventDefault();
      await axios.post("http://localhost:8000/users",user,{
        headers:{
            'Content-Type':'application/json'
          }
})
       .then((res)=>
        console.log(res)
       )
      
        navigate("/")
      
  }


  const handlerChangeInput = async (e)=>{
      const {name,value} = e.target;
      setUser({
        ...user,
        [name]:value
      })
    
  }

  
 
    return (
        <div className="form-body">
          
            <h1 className="form-heading">Post User Details</h1>
            <div className="form-container">
           <Link to="/"> <Button variant="danger"> {">>"} Back </Button></Link>
          <Form onSubmit={handerSubmit}>

        <Form.Group className="mb-4" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" name="fullName" value={user.fullName} onChange={handlerChangeInput}/>
          
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="text" placeholder="Enter a vaild Email" name="Email" value={user.Email} onChange={handlerChangeInput} />
          
        </Form.Group>
        <Form.Group className="mb-4" >
          <Form.Label>Contact</Form.Label>
          <Form.Control type="number" placeholder="Enter User contact" name="contact" value={user.contact} onChange={handlerChangeInput}/>
          
        </Form.Group>
        <Button type="submit" variant="primary" onClick={handerSubmit} >Submit Details</Button> 
      </Form>
      </div>
      </div>
    )
}

export default AddUser