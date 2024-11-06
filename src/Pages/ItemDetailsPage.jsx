import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const  ItemDetailspage= () => {
    const location = useLocation();

    const currentItem = location.state.item;

    console.log(currentItem);
    
    
    return < Container className="d-flex flex-column align-items-center">
    
    <h1>{currentItem.name}</h1>
    <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+currentItem.image.full} alt="" />
    <p>{currentItem.description}</p>
    <div>
        {currentItem.into.map((obj) =>{
            return <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+obj+".png"} alt="" />
        })}
    </div>
    
    </Container>;
}
 
export default ItemDetailspage;