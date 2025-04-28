import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
    const {id } = useParams();

    const users = {
    fullName: "",
    Email: "",
    contact: "",
  };

  const [user, setUser] = useState(users);

  useEffect(() => {
    axios.put(`http://localhost:8000/users/${id}`)
    .then((res)=>{
      setUser(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [id]);

  

  const handlerChangeInput = async (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      
      <div className="form-body">
        <h1 className="form-heading">Edit Details Form</h1>
        <div className="form-container">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                name="fullNmae"
                value={user.fullName}
                onChange={handlerChangeInput}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a vaild Email"
                name="Email"
                value={user.Email}
                onChange={handlerChangeInput}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter User contact"
                name="contact"
                value={user.contact}
                onChange={handlerChangeInput}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              update user
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
