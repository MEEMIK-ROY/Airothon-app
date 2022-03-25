import axios from 'axios';
import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';


export default function Registration() {
    const [user,setUser] = useState("");
    const [emailAdd,setEmailAdd]= useState("");
    const [pass,setPass] = useState("");

    function clearInput(){
        setUser("");
        setEmailAdd("");
        setPass("");
    }
    async function postUser(){
        const userDetails = {
            "username":user,
            "email":emailAdd,
            "password":pass
        };
        
        const response = await axios.post("https://mr-bms-backend.herokuapp.com/user-register",userDetails).then((res)=>{
            Swal.fire({
                title: `<strong>${res.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false
              })
            clearInput();
            }).catch((error)=>
                            Swal.fire({
                                title: `<strong>${error.message}</strong>`,
                                icon: 'error',
                                showCloseButton: true,
                                showCancelButton: false,
                                focusConfirm: false
                              })
        );
        // console.log(response);
    }

    return (
        <div>
            <Container style={{padding:'5%'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            value={user} 
                            onChange={(e)=> setUser(e.target.value)} 
                            type="text" placeholder="Enter User Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            value={emailAdd} 
                            onChange={(e)=> setEmailAdd(e.target.value)} 
                            type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            value={pass} 
                            onChange={(e)=> setPass(e.target.value)}
                            type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" onClick={postUser}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
