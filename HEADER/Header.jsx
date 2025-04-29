import React from "react";
import {Container,Nav,Navbar} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Header =()=>{
    return(
        <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand  as={Link} to="/">My app</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">DashBoard</Nav.Link>
            <Nav.Link as={Link} to="/user">Add User</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      </>
    );
};

export default Header;
