import Form from 'react-bootstrap/Form'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function Reviewform(){
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

  const addReview = (event) => {
    event.preventDefault();
    setDesignation('')
    setEmail('')
    setName('')
    setFeedback('')
    console.log(name + ' ' + email + ' ' + designation + ' ' + feedback)
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