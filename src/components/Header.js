import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


function Header() {
    return (
      <div>
         <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">One Chance</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/movies">Category1</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button> 
                </Form> */}
                <Button 
                variant="success"
                style={{marginRight:'5px'}}
                onClick={()=> window.location.href ="/register" }>Register</Button>
                </Navbar.Collapse>
                <Button 
                variant="success"
                onClick={()=> window.location.href ="/login" }>Login</Button>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default Header;