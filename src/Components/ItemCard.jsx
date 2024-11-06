import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ItemCard}) => {
    console.log(ItemCard);
    
    const navigate = useNavigate();
    const navigateTo = (name) => {
      navigate("/item/"+name, {state : {item : ItemCard}})
    }

    return <>
    
     <Card style={{ width: '11rem' }}onClick={() => {navigateTo(ItemCard.name)}} >
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+ItemCard.image.full} />
      <Card.Body>
        <Card.Title>{ItemCard.name}</Card.Title>
        <Button variant="primary">detail</Button>
      </Card.Body>
    </Card>
 
    </>
}
 
export default ItemCard ;