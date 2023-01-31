import Form from 'react-bootstrap/Form'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';


function Reviewform({func}){

  const [data, setData] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [feedback, setFeedback] = useState('');

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const designationChange = (event) => {
    setDesignation(event.target.value);
  };

  const feedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/${func}`).then(res => res.json()).then(
        result => {
            setData(result)
        }
    ).catch(console.log);
  }, [])

  function getData() {
    
  }

  function handleClick(formData) {

    // Send data to the backend via POST
    fetch(`http://localhost:3001/${func}`, {

      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }, 
      mode: 'cors', 
      body: JSON.stringify(formData) // body data type must match "Content-Type" header

    })
  }

  const addReview = (event) => {
    
    event.preventDefault();
    setDesignation('')
    setEmail('')
    setName('')
    setFeedback('')
    const formData = {
        'name': name,
        'email': email,
        'designation': designation,
        'feedback': feedback
    }
    data['reviews'].push(formData)
    setData(data)
    console.log(data)
    handleClick(data)

  }
    return(
        <div style={{padding: '4% 0% 10% 0%', textAlign: 'center', backgroundColor: '#ffffff'}}>
            <h1 style={{color: 'black'}}>
                Contact
            </h1>
            <br/>
            <Form style={{margin: '0% 20%', backgroundColor: '#ebebeb', padding: '2%', borderRadius: '6px'}} onSubmit={addReview}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' placeholder="Enter full name" onChange={nameChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={emailChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" placeholder="Enter your designation" onChange={designationChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Feedback</Form.Label>
                    <Form.Control as="textarea" placeholder="Briefly rate your experience" rows={6} onChange={feedbackChange} />
                </Form.Group>
                <Button style={{backgroundColor: '#000000', color: '#FEFFFF'}} type="submit" >
                    Submit
                </Button>
            </Form> 
        </div>
        
    );

}
export default Reviewform;