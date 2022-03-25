import './AllClothes.css'
import axios from 'axios';
import {useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { useParams } from "react-router-dom";

export default function CategoryClothes() {

    const {categoryId} = useParams();
    const [data,setData] = useState([]);
    const [catData,setCatData]=useState([]);
    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.post('https://enigmatic-headland-64592.herokuapp.com/api/cloth/getByCategory',{"categoryId":categoryId});
                console.log(response.data);
                setData(response.data.message);
              } catch (error) {
                console.error(error);
              }
        }
        fetchData();
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
        <div className='bg'>
            <Container fluid style={{padding:'5%'}}>
                <Row style={{textAlign:'center'}}>
                    <h2>{catData.name}</h2>
                    {data.map((cloth)=>
                        <Col xs={6} md={4} lg={3} 
                        style={{marginTop:'2%'}} 
                        id={cloth._id} key={cloth._id}
                        onClick={()=> window.location.href ="/cloth/"+cloth._id } >
                            <Card style={{padding:'20px',margin:'10px', borderRadius:'10px', maxHeight:"350px",maxWidth:"250px"}}>
                                <Card.Img variant="top" src={cloth.clothImg[0].img} style={{maxHeight:'250px',maxWidth:'240px'}}/>
                                <Card.Body>
                                <Card.Title>{cloth.type}</Card.Title>
                                <Card.Text>
                                    {cloth.description}
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
