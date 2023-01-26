import React from 'react'
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
      <Nav variant="pills" style={{zIndex: '10', backgroundColor: '#3AAFA9', position:'sticky', top: '0', width: '100%', display:'flex', justifyContent: 'space-between', padding: '1% 5%'}}>
        <div style = {{paddingLeft: '5%'}}>
          <Nav.Item>
            <Nav.Link style={{backgroundColor: '#3AAFA9', color: 'white', fontSize: '100%'}} href="/"><span><b>A. MANI DEEPAK</b></span></Nav.Link>
          </Nav.Item>
        </div>
        <div style={{display: 'flex'}}>
          <Nav.Item>
            <Nav.Link style={{backgroundColor: '#000000', color: '#FEFFFF'}} href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{backgroundColor: '#000000', color: '#FEFFFF'}} href="/projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{backgroundColor: '#000000', color: '#FEFFFF'}} href="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{backgroundColor: '#3AAFA9', border: '1px solid #000000', color: '#FEFFFF'}} href="/about">
              Resume
            </Nav.Link>
          </Nav.Item>
        </div>
        
      </Nav>
  );
}

export default NavBar
