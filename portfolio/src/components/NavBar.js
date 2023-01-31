import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return (
      <Nav variant="pills" style={{zIndex: '10', backgroundColor: '#3AAFA9', position:'sticky', top: '0', width: '100%', display:'flex', justifyContent: 'space-between', padding: '1% 5%'}}>
        <div style = {{paddingLeft: '5%'}}>
          <Nav.Item>
            <LinkContainer style={{backgroundColor: '#3AAFA9', color: 'white', fontSize: '100%'}} to = '/mani'>
              <Nav.Link ><span><b>A. MANI DEEPAK</b></span></Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </div>
        <div style={{display: 'flex'}}>
          <Nav.Item>
            <LinkContainer style={{backgroundColor: '#000000', color: '#FEFFFF'}} to="/mani">
            <Nav.Link >Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer style={{backgroundColor: '#000000', color: '#FEFFFF'}} to="/projects">
            <Nav.Link >Projects</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer style={{backgroundColor: '#000000', color: '#FEFFFF'}} to="/about">
            <Nav.Link >
              About
            </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer style={{backgroundColor: '#3AAFA9', border: '1px solid #000000', color: '#FEFFFF'}} to="/about">
            <Nav.Link >
              Resume
            </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </div>
        
      </Nav>
  );
}

export default NavBar
