import React from 'react'
import {Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div>
      <h3>NavBar</h3>
      <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href='/HomePage'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          Projects
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default NavBar
