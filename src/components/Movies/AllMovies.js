import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from './movies.json';


export default function AllMovies() {
    return (
        <div>
            <Container fluid style={{padding:'5%', background:'wheat'}}>
                <Row style={{textAlign:'center'}}>
                    {data.map((movie)=>
                        <Col xs={6} md={4} lg={3} 
                        style={{marginTop:'2%'}} 
                        id={movie.id} key={movie.id}
                        onClick={()=> window.location.href ="/movies/"+movie.id } >
                            <Card style={{width:'250px',height:'300px'}}>
                                <Card.Img variant="top" src={movie.img} style={{width:'250px',height:'200px'}}/>
                                <Card.Body>
                                <Card.Title>{movie.movie}</Card.Title>
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
