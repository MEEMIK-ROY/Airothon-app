import axios from 'axios';
import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';


export default function Login() {
    const [emailAdd,setEmailAdd]= useState("");
    const [pass,setPass] = useState("");

    function clearInput(){
        setEmailAdd("");
        setPass("");
    }
    async function postUser(){
        const userDetails = {
            "email":emailAdd,
            "password":pass
        };
        
        const response = await axios.post("https://enigmatic-headland-64592.herokuapp.com/api/login",userDetails).then((res)=>{
            Swal.fire({
                title: `<strong>${res.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false
              });
              console.log(res);
              localStorage.setItem("User",JSON.stringify(res.data.data.user));
              localStorage.setItem("Token",JSON.stringify(res.data.data.auth_token));
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
        console.log(response);
            
            // clearInput();
    }

    return (
        <div>
            <Container style={{padding:'5%'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            value={emailAdd} 
                            onChange={(e)=> setEmailAdd(e.target.value)} 
                            type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your personal details with anyone else.
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
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
