import React from 'react'
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
      <Nav variant="pills" defaultActiveKey="/home" style={{display:'flex', justifyContent: 'space-between', padding: '0% 5%'}}>
        <div style = {{paddingLeft: '5%'}}>
          <Nav.Item>
            <Nav.Link style={{color:'black'}} href="/"><span><b>A. MANI DEEPAK</b></span></Nav.Link>
          </Nav.Item>
        </div>
        <div style={{display: 'flex'}}>
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
        </div>
        
      </Nav>
  );
}

export default NavBar
