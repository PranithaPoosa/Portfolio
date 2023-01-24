import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import './HomePage.css'

  
function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{zIndex:'-10'}}>
       <div style={{ display: 'flex', justifyContent:'space-evenly',height: '-webkit-fill-available', width: '100%', backgroundColor: '#ebebeb', alignItems: 'center'}}>
            <div style={{backgroundColor: "white", padding: '0.4%'}}>
                <div style={{display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '30% 0%'}} onClick={() => console.log('hi')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                    </svg>
                </div>
                <div style={{display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '30% 0%'}} onClick={() => console.log('hi')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </div>
                <div style={{display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '30% 0%'}} onClick={() => console.log('hi')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </div>
            </div>
            <div style={{padding: '7%'}}>
                <h1 style={{color: 'black'}}><span>Hey, I'm</span></h1>
                <h1 ><b><span style={{color: '#3AAFA9'}}> Mani Deepak Reddy Aila </span></b></h1>
                <br/>
                <h5>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</h5>
                <br/>
                <Link to="/projects">
                    <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}}><b>Projects</b></Button>
                </Link>
            </div>
            <div style={{padding: '10%'}}>
                <img src='/assets/self.jpg'/>
            </div>
        </div>
        <div style={{padding: '5%', display: 'flex'}}>
            <div style={{minWidth: '50%', maxWidth: '50%'}}>
                <h1 style={{color: 'black'}}>
                    About
                </h1>
                <div>
                    <div style = {{borderLeft: '6px solid #646160', height: '50%'}}>
                        <div style = {{padding: '2% 5%'}}>
                            <p style={{fontSize: '120%', textAlign: 'justify'}}>A few interesting things about me. I love to read science fiction (my favorite is Frank Herbert's Dune). I am also an avid gamer. I love to play competitive strategy games and first-person shooters. Lastly, I love learning. Every day I push myself to learn something new, whether that be about machine learning, software engineering, or miscellaneous facts about the universe.</p>
                        </div>
                    </div>
                </div><br/>
                <Link to="/about">
                    <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}}>More</Button>
                </Link>
            </div>
            
            <div style={{minWidth: '50%', maxWidth: '50%', paddingLeft: '5%'}}>
                <h1 style={{color: 'black'}}>
                    Skills
                </h1>
                <div style = {{  whiteSpace: 'nowrap' ,flexWrap: 'wrap', display: 'flex', width: '90%', padding: '0'}}>
                    
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>Apache Spark</div>
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>HTML</div>
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>CSS</div>
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>Python</div>
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>Apache Airflow</div>
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>Java</div>
                    <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>SQL</div>
                    
                </div>
            </div>
        </div>
        <div style={{padding: '4% 0% 10% 0%', textAlign: 'center', backgroundColor: '#ebebeb'}}>
            <h1 style={{color: 'black'}}>
                Reviews
            </h1>
            <br/>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <Card style={{ width: '50%' , flexDirection:'row', margin: '3% 25%'}}>
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
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{ width: '50%' , flexDirection:'row', margin: '3% 25%'}}>
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
                </Carousel.Item>
                </Carousel>
                 
        </div>
        <div style={{padding: '4% 0% 10% 0%', textAlign: 'center', backgroundColor: '#ffffff'}}>
            <h1 style={{color: 'black'}}>
                Contact
            </h1>
            <br/>
            <Form style={{margin: '0% 20%', backgroundColor: '#ebebeb', padding: '2%', borderRadius: '6px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter message" rows={6} />
                </Form.Group>
                <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}} type="submit">
                    Submit
                </Button>
                </Form> 
        </div>
    </div>
  )
}

export default HomePage
