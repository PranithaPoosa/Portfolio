import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";


function Projects() {
  let {profile = 'default'} = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3001/${profile}`).then(res => res.json()).then(
        result => {
            setData(result.projects)
            // console.log(result)
        }
    ).catch(console.log);
  }, []);

  var addProjectCard = data.map((item) => {
    return (
      <Card style={{ width: '60rem' , flexDirection:'row', margin: '3% 0%'}}>
        <Card.Img src={item.image} class="card-img-top" style={{width:'30%'}}alt="project"/>
          <Card.Body>
          <Card.Title><b>{item.title}</b></Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Link target="_blank" href={item.timeline}>Link to Source</Card.Link>
          </Card.Body>
        </Card>
    );
  });
  return (
      <div>
        <div style={{backgroundColor:'#d7d7d7', height:'100px'}}>
          <p style={{textAlign:'center', padding:'2%', fontWeight:'bold'}}>PROJECTS</p>
        </div>

       <div style={{paddingTop:'2%', textAlign: '-webkit-center'}}>
        {addProjectCard}
      </div>
    </div>
  );
}

export default Projects;