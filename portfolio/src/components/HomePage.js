import React, { useState, useEffect, useRef } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import './HomePage.css'
import { send } from 'emailjs-com';

  
function HomePage({formData}) {
  let { profile = 'default' } = useParams()
  let navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [data, setData] = useState("")
  const [skills, setSkills] = useState([])
  const [reviews, setReviews] = useState([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const messageChange = (event) => {
    setMessage(event.target.value);
  };


  useEffect(() => {
    formData(profile)
    fetch(`https://my-json-server.typicode.com/pranithapoosa/json-server/${profile}`).then(res => res.json()).then(
        result => {
            setData(result)
            setSkills(result.skills)
            setReviews(result.reviews)
        }
    ).catch(console.log);
    
  }, [profile]);

  const sendEmail = (e) => {
      e.preventDefault();
      setName('')
      setEmail('')
      setMessage('')
      const toSend = {
        'name': name,
        'reply_to': data.contact['email'],
        'message': 'From: ' + name + ', Contact: ' + email + ', Message: ' + message
      }
      
      send(
        'service_wy4kg3n',
        'template_nqj2u5m',
        toSend,
        'SUMB2H4LVi2vPvFwi'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
        e.target.reset()
        
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const toReviewForm = () => {
    navigate('/reviewform')
  };

  var addCarouselItem = reviews.map((item) => {
    return (
        <Carousel.Item>
            <Card style={{ width: '50%' , flexDirection:'row', margin: '3% 25%'}}>
                <Card.Body>
                <Card.Title><span><b>{item.name}</b></span></Card.Title>
                <Card.Text>
                    {item.designation}
                </Card.Text>
                <Card.Text href="#"><span><i>"{item.feedback}"</i></span></Card.Text>
                <Card.Text href="#"><span style = {{color: 'blue'}}>{item.email}</span></Card.Text>
                </Card.Body>
            </Card>
            
        </Carousel.Item> 
    );
  });

  var items = skills.map((item) => {
    return (
        <div style = {{backgroundColor:'#ebebeb', padding: '12px', borderRadius: '10px', margin: '10px'}}>{item}</div>
    );
  });

  return (
    data ?
    <div style={{zIndex:'0'}}>
       <div style={{ display: 'flex', justifyContent:'space-evenly',height: '-webkit-fill-available', width: '100%', backgroundColor: '#ebebeb', alignItems: 'center'}}>
            <div style={{backgroundColor: "white", padding: '0.4%'}}>
                <a href = {data.social_media['github']} target="_blank" >
                    <div style={{display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '30% 0%'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </div>
                </a>
                <a href = {data.social_media['linkedin']} target="_blank" >
                    <div url = {data.social_media['linkedin']} style={{display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '30% 0%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </div>
                </a>
            </div>
            <div style={{padding: '7%'}}>
                <h1 style={{color: 'black'}}><span>Hey, I'm</span></h1>
                <h1 ><b><span style={{color: '#3AAFA9'}}> {data.name} </span></b></h1>
                <br/>
                <h5>{data.about_short}</h5>
                <br/>
                <Link to={`/${profile}/projects`}>
                    <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}}><b>Projects</b></Button>
                </Link>
            </div>
            <div style={{padding: '10%'}}>
                <img width={404} height={500} src={`/data/${profile}/${profile}.jpg`}/>
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
                            <p style={{fontSize: '120%', textAlign: 'justify'}}>{data.about}</p>
                        </div>
                    </div>
                </div><br/>
                <Link to={`/${profile}/about`}>
                    <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}}>More</Button>
                </Link>
            </div>
            
            <div style={{minWidth: '50%', maxWidth: '50%', paddingLeft: '5%'}}>
                <h1 style={{color: 'black'}}>
                    Skills
                </h1>
                <div style = {{  whiteSpace: 'nowrap' ,flexWrap: 'wrap', display: 'flex', width: '90%', padding: '0'}}>
                    {items}
                </div>
            </div>
        </div>
        <div style={{padding: '4% 0% 10% 0%', textAlign: 'center', backgroundColor: '#ebebeb'}}>
            <div>
            <span>
            <h1 style={{color: 'black'}}>
                Testimonials
            </h1>
            </span>
            <span>
            <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}} onClick={toReviewForm}>
                Add
            </Button>
            </span>
            </div>
            <br/>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {addCarouselItem}
            </Carousel>
                 
        </div>
        <div style={{padding: '4% 0% 10% 0%', textAlign: 'center', backgroundColor: '#ffffff'}}>
            <h1 style={{color: 'black'}}>
                Contact
            </h1>
            <br/>
            <Form onSubmit={sendEmail} style={{margin: '0% 20%', backgroundColor: '#ebebeb', padding: '2%', borderRadius: '6px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder="Enter name" name='from_name' onChange={nameChange} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='from_email' onChange={emailChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter message" rows={6} name='message' onChange={messageChange} required/>
                </Form.Group>
                <Button disabled={profile == 'default'} style={{backgroundColor: '#000000', color: '#FEFFFF'}} type="submit">
                    Submit
                </Button>
                </Form> 
        </div>
    </div> 
    :
    <>
    </>
  )
}

export default HomePage
