import './AllClothes.css'
import axios from 'axios';
import {useState,useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


import { useParams } from "react-router-dom";


export default function SingleCloth() {
    const {clothid} = useParams();
    const obj = {
        "id":clothid
    }
    console.log(obj);
    const [singleData,setSingleData] = useState([]);

    // function addToCart(){
    //     if(localStorage.getItem('Token')){
    //         window.location.href = "/register"
    //     }
    //     else{
    //         addClothToCart();
    //     }
    // }

    // function addClothToCart(){
    //     let user = localStorage.getItem('User');
    //     if(user){

    //     }
    // }
    useEffect(() => {
        async function fetchData(){
            try {
                const response = await axios.post("https://enigmatic-headland-64592.herokuapp.com/api/cloth/getById",obj);
                console.log(response);
                setSingleData([response.data.message]);
              } catch (error) {
                console.error(error);
              }
        };
        fetchData();
    }, []);
    return (
        <div className='bg2'>
           <Container fluid style={{padding:'5%'}}>
                <Row style={{textAlign:'center'}}>
                    {singleData.map((cloth)=>{
                        return (
                        <Col xs={12} id={cloth._id} key={cloth._id}>
                            {/* <Card style={{margin:'0 auto',padding:'20px',backgroundColor:'none'}}>
                                <Card.Img variant="top" src={cloth.clothImg[0].img} style={{width:'250px',height:'200px'}}/>
                                <Card.Body>
                                <Card.Title>{cloth.type}</Card.Title>
                                <Card.Text>
                                    {cloth.description}
                                </Card.Text>
                                </Card.Body>
                            </Card> */}
                            <Container>
                                <Row>
                                    <Col xs={12} className='text1'>
                                        {cloth.type}
                                    </Col>
                                    <Col xs={12}>
                                        <Image fluid={true} src={cloth.clothImg[0].img} style={{margin:"0 auto",maxWidth:'300px',maxHeight:'350px',marginBottom:'10px'}}/>
                                    </Col>
                                    <Col xs={12} className='text2'>
                                        {cloth.description}
                                    </Col>
                                    <Col xs={6} className='labelText'>
                                        Size
                                    </Col>
                                    <Col xs={6} className='valueText'>
                                        {cloth.size}
                                    </Col>
                                    <Col xs={6} className='labelText'>
                                        Brand
                                    </Col>
                                    <Col xs={6} className='valueText'>
                                        {cloth.brand}
                                    </Col>
                                    <Col xs={6} className='labelText'>
                                        Color
                                    </Col>
                                    <Col xs={6} className='valueText'>
                                        {cloth.color}
                                    </Col>
                                    <Col xs={6} className='labelText'>
                                        Units Left
                                    </Col>
                                    <Col xs={6} className='valueText'>
                                        {cloth.qty}
                                    </Col>
                                    <Col xs={12}>
                                        <Button variant="success" style={{marginTop:"20px"}}>AddToCart</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        )
                    })}
                </Row>
            </Container> 
        </div>
    )
}
