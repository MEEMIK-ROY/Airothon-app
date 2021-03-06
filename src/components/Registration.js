import axios from 'axios';
import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';


export default function Registration() {
    const [user,setUser] = useState("");
    const [emailAdd,setEmailAdd]= useState("");
    const [address,setAddress]= useState("");
    const [contact,setContact]= useState("");
    const [pass,setPass] = useState("");

    function clearInput(){
        setUser("");
        setEmailAdd("");
        setAddress("");
        setContact("");
        setPass("");
    }
    async function postUser(){
        const userDetails = {
            "name":user,
            "email":emailAdd,
            "address":address,
            "phone_number":contact,
            "password":pass
        };
        
        const response = await axios.post("https://enigmatic-headland-64592.herokuapp.com/api/signup",userDetails).then((res)=>{
            Swal.fire({
                title: `<strong>${res.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false
              });
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
            // localStorage.setItem("User",response.data.data.user);
            // localStorage.setItem("Token",response.data.data.access_token);
            // clearInput();
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
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            value={address} 
                            onChange={(e)=> setAddress(e.target.value)} 
                            type="text" placeholder="Enter your address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formContact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control 
                            value={contact} 
                            onChange={(e)=> setContact(e.target.value)} 
                            type="number" placeholder="Enter your Phone Number" />
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
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}
