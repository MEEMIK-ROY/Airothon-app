import axios from 'axios';
import {useState,useEffect} from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function ClothSlider(props) {
    const categoryId = props.categoryId
    const [data,setData] = useState([]);
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
    return (
      <div style={{padding:'2%'}}>
        <Carousel indicators={false}>
            <Carousel.Item>
                <CardGroup style={{display:'flex',gap:'20px', justifyContent:'space-around'}}>
                    {data.map((cloth)=>
                        <div key={cloth._id}>
                            <Card 
                            className="bg-dark text-white" style={{height:"350px",width:"250px"}}
                            onClick={()=> window.location.href ="/cloth/"+cloth._id }>
                                <Card.Img src={cloth.clothImg[0].img} alt="Card image" style={{height:'250px',width:'240px', margin: '0px auto'}} />
                                <Card.Title style={{textAlign:'center'}}>{cloth.type}</Card.Title>
                                <Card.Text style={{textAlign:'center'}}>
                                    {cloth.description}
                                </Card.Text>
                            </Card>
                        </div>
                    )}
                    
                </CardGroup>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
  export default ClothSlider;
