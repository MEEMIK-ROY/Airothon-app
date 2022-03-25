import axios from 'axios';
import {useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";


export default function SingleMovieFetch() {
    const {movid} = useParams();
    const [singleData,setSingleData] = useState([]);
    useEffect(async () => {
        try {
            const response = await axios.get(`https://mr-bms-backend.herokuapp.com/movie/${movid}`);
            console.log(response);
            setSingleData([response.data]);
          } catch (error) {
            console.error(error);
          }
    }, []);
    return (
        <div>
           <Container fluid style={{padding:'5%', background:'wheat'}}>
                <Row style={{textAlign:'center'}}>
                    {singleData.map((movie)=>{
                        return (
                        <Col xs={12}  style={{marginTop:'2%'}} id={movie._id} key={movie._id}>
                            <Card style={{width:'250px',height:'300px', margin:'0 auto'}}>
                                <Card.Img variant="top" src={movie.imageUrl} style={{width:'250px',height:'200px'}}/>
                                <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.actor}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </Container> 
        </div>
    )
}
