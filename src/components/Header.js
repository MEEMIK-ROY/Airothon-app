import axios from 'axios';
import {useState,useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'


function Header() {
    const [data,setData] = useState([]);
    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.get('https://enigmatic-headland-64592.herokuapp.com/api/category/getAll');
                console.log(response.data);
                setData(response.data.message);
              } catch (error) {
                console.error(error);
              }
        }
        fetchData();
    }, [])
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
                    <Nav.Link href="/clothes">Clothes</Nav.Link>
                    {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                        {data.map((category)=>
                            <NavDropdown.Item href={"/category/"+category._id} key={category._id}>{category.name}</NavDropdown.Item>
                        )}
                    </NavDropdown>
                </Nav>
                
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