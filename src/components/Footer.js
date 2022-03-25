
import {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import  Form  from "react-bootstrap/Form";


function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
      <div style={{background:'black',color:'white',position:'fixed',bottom:'0',right:'0'}}>
        <Container fluid>
          <Row style={{padding:'3%'}}>
            <Col xs={6}>
              Want to Donate Clothes!!
            </Col>
            <Col xs={6} style={{display:'flex',flexDirection:'row-reverse'}}>
              <Button onClick={handleShow} style={{background:'rgb(236,94,113)'}}>Donate Now</Button>
            </Col>
          </Row>   
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Donate Clothes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please provide your contact and address, our agents will be there to pick up the clothes from your Doorstep!!
            <Form>
              <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control 
                  type="number" placeholder="Enter Contact Number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Locality</Form.Label>
                  <Form.Control 
                    type="text" placeholder="Enter your locality" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control 
                    type="text" placeholder="Enter your city" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>State</Form.Label>
                  <Form.Control 
                    type="text" placeholder="Enter your state" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>PINCODE</Form.Label>
                  <Form.Control 
                    type="number" placeholder="Enter your pincode" />
                  <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                  </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Donate
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
  export default Footer;