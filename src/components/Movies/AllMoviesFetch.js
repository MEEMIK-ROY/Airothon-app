import axios from 'axios';
import {useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function AllMoviesFetch() {

    const [data,setData] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get('https://mr-bms-backend.herokuapp.com/movies');
            console.log(response);
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
    }, [])

    // async function getMovies() {
    //     try {
    //       const response = await axios.get('https://mr-bms-backend.herokuapp.com/movies');
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    return (
        <div>
            <Container fluid style={{padding:'5%', background:'wheat'}}>
                <Row style={{textAlign:'center'}}>
                    {data.map((movie)=>
                        <Col xs={6} md={4} lg={3} 
                        style={{marginTop:'2%'}} 
                        id={movie._id} key={movie._id}
                        onClick={()=> window.location.href ="/movies/"+movie._id } >
                            <Card style={{width:'250px',height:'300px'}}>
                                <Card.Img variant="top" src={movie.imageUrl} style={{width:'250px',height:'200px'}}/>
                                <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.actor}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}
