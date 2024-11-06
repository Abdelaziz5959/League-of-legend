import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemService from "../Services/ItemService";
import ItemCard from "../Components/ItemCard";
import { Container } from "react-bootstrap";


    const ItemPage = () => {
        const [item, setItem] = useState({});

    
    
        const fectchItembyId = async () => {
    
            try {
                const response = await ItemService.getDetailItem();
                setItem(response.data.data);
                console.log(response);
                
    
            } catch (error) {
                console.log(error);
            }
        }
    
        useEffect(() => {
            fectchItembyId()
        }, []);
    
    return <Container className="d-flex flex-column align-items-center">
    <h1>itemPage</h1>
   
    
     <div className="d-flex flex-wrap gap-5"> 
    {Object.entries(item).map((item) =>{
        return <ItemCard ItemCard={item[1]} key ={item[0].id}/> 
    })}
   </div> 
    </Container>
}
 
export default ItemPage;