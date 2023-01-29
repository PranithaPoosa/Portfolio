import React from "react";

function Reviewform(){
    return(
        <div>
        <h1>form</h1>
        <Form onSubmit={onSubmit} style = {{padding: '5% 25%'}}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text'
                placeholder='Enter first and last name'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Working at</Form.Label>
                <Form.Control type='text'
                placeholder='Enter your company name' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email Id</Form.Label>
                <Form.Control type='text'
                placeholder='Email address' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Designation</Form.Label>
                <Form.Control type='text'
                placeholder='Briefly describe the role' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Feedback</Form.Label>
                <Form.Control type='text'
                name='message'
                placeholder='Briefly rate your experience' />
            </Form.Group>
            <Button className="bg-secondary" as="input" type="submit" value="Submit" />{' '}
        </Form>
        </div>
        
    );

}
export default Reviewform;