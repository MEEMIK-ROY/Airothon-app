import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from './movies.json';


export default function SingleMovie() {
    const {movid} = useParams();
    return (
        <div>
            <Container fluid style={{padding:'5%', background:'wheat'}}>
                <Row style={{textAlign:'center'}}>
                    {data.map((movie)=>{
                        if(movie.id==movid)
                        return(
                        <Col xs={12}  style={{marginTop:'2%'}} id={movie.id} key={movie.id}>
                            <Card style={{width:'250px',height:'300px', margin:'0 auto'}}>
                                <Card.Img variant="top" src={movie.img} style={{width:'250px',height:'200px'}}/>
                                <Card.Body>
                                <Card.Title>{movie.movie}</Card.Title>
                                <Card.Text>
                                    {movie.actor}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    }
                    )}
                </Row>
            </Container>
        </div>
    )
}
