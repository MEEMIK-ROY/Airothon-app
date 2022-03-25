import axios from 'axios';
import {useState,useEffect} from 'react';
import ClothSlider from './ClothSlider';

export default function Homepage() {

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
        <div className='bg'>
            {data.map((category)=>
                <div key={category._id}>
                    <h2 style={{color:'white',textAlign:'center'}}>{category.name}</h2>
                    <ClothSlider categoryId={category._id} key={category._id}/>
                </div>
            )}
        </div>
    )
}
