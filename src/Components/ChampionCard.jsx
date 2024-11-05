import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ChampionCard = ({championCard}) => {
    console.log(championCard);
    
    const navigate = useNavigate();
    const navigateTo = (id) => {
      navigate("/champion/"+id);
    }

    return <>
    
     <Card style={{ width: '11rem' }}onClick={() => {navigateTo(championCard.id)}} >
      <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +championCard.id+"_0.jpg"} />
      <Card.Body>
        <Card.Title>{championCard.name}</Card.Title>
        <Card.Text>
        {championCard.title}
        </Card.Text>
        <Button variant="primary">detail</Button>
      </Card.Body>
    </Card>
 
    </>;
}
 
export default ChampionCard ;