import React, {useState, useEffect} from 'react'
import { LinkContainer } from "react-router-bootstrap";
import {useParams} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

// get profile to this page too!
function NavBar() {
  const { profile = 'default' } = useParams();
  const [data, setData] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3001/${profile}`).then(res => res.json()).then(
        result => {
            setData(result)
        }
    ).catch(console.log);
  }, []);
  return (
      <>
        <Nav variant="pills" style={{zIndex: '10', backgroundColor: '#3AAFA9', position:'sticky', top: '0', width: '100%', display:'flex', justifyContent: 'space-between', padding: '1% 5%'}}>
          <div style = {{paddingLeft: '5%'}}>
            <Nav.Item>
              <LinkContainer style={{backgroundColor: '#3AAFA9', color: 'white', fontSize: '100%'}} to = {`/${profile}`}>
                <Nav.Link ><span><b>{data.name_short}</b></span></Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </div>
          <div style={{display: 'flex'}}>
            <Nav.Item>
              <LinkContainer style={{backgroundColor: '#000000', color: '#FEFFFF'}} to = {`/${profile}`}>
              <Nav.Link >Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer style={{backgroundColor: '#000000', color: '#FEFFFF'}} to={`/${profile}/projects`}>
              <Nav.Link >Projects</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer style={{backgroundColor: '#000000', color: '#FEFFFF'}} to={`/${profile}/about`}>
              <Nav.Link >
                About
              </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer style={{backgroundColor: '#3AAFA9', border: '1px solid #000000', color: '#FEFFFF'}} to={`/${profile}/resume`}>
              <Nav.Link >
                Resume
              </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </div>
          
        </Nav>
      </>
  );
}

export default NavBar
