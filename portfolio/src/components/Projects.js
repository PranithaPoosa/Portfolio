import React from "react";
import Card from 'react-bootstrap/Card';


function Projects() {
  return (
       <div>
        <div style={{backgroundColor:'#d7d7d7', height:'100px'}}>
          <p style={{textAlign:'center', padding:'2%', fontWeight:'bold'}}>PROJECTS</p>
        </div>

       <div style={{paddingTop:'2%'}}>
       <Card style={{ width: '50rem' , flexDirection:'row'}}>
       <Card.Img src="/assets/image.png" class="card-img-top" style={{width:'30%'}}alt="project"/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
       </Card>

       <Card style={{ width: '50rem' , flexDirection:'row', borderBlockColor:'none'}}>
       <Card.Img src="/assets/image.png" class="card-img-top" style={{width:'30%'}}alt="project"/>
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
       </Card>
    </div>

    </div>
  );
}

export default Projects;