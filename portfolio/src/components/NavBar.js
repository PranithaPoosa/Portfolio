import React from 'react'
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
    <div style={{display: 'flex', justifyContent:'flex-end', paddingRight:'2%'}}>
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link style={{color:'black'}} href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'black'}} href="/projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={{color:'black'}} href="/about">
          About
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default NavBar
