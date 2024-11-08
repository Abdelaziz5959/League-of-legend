import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChampionService from "../Services/ChampionService";
import { Button, Card, Container } from "react-bootstrap";



const DetailChampion = () => {
    const { id } = useParams();
    const [champion, setChampion] = useState({});


    const fectchChampionByID = async () => {

        try {
            const response = await ChampionService.getDetailChampions(id);
            setChampion(response.data.data[id]);
            // console.log(response.data.data[id]);
            

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fectchChampionByID()
    }, [])

    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate("/champion/" + id)
    }

    return <Container className="d-flex flex-column align-items-center">
        
        <h1>Champion {id}</h1>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            <img style={{ width: '25%' }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champion.id + "_0.jpg"}
                alt={"imgchamps" + champion} />
        </div>
        <h2>Lore </h2>
        <p>{champion.lore}</p>
        
<div className="d-flex">
<div className="col-6">
    <h2>Conseil pour les alliés</h2>
    <ul>
    {champion.allytips && champion.allytips.map((tip) =>{
        return <li key={tip}>{tip}</li> 
    })}
    </ul>
</div>
<div className="col-6">
    <h2>Conseil pour les ennemies</h2>
        <ul>
    {champion.enemytips && champion.enemytips.map((tip) =>{
        return <li key={tip}>{tip}</li> 
    })}
    </ul>
</div>
</div>
<h2>Infos</h2>
<ul>
    <li>attaque : {champion.info != undefined && champion.info.attack}</li>
    <li>defense : {champion.info &&champion.info.defense}</li>
    <li>magic : {champion.info && champion.info.magic}</li>
    <li>difficulté : {champion.info && champion.info.difficulty}</li>
</ul>
<h2>Passif :</h2>
{champion.passive && <>
<h3>{champion.passive.name}</h3>
<div className="d-flex">
    <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/"+champion.passive.image.full} alt="" />
    <p>{champion.passive.description}</p>
</div>
</>}
{champion.spells && champion.spells.map((spell) =>{
    return <>
    <h3>{spell.name}</h3>
        <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/"+spell.image.full} alt="" />
        <p>{spell.description}</p>
    </>
})}

 {champion.stats && Object.entries(champion.stats).map((key) => {
    return <span>{key[0]} ={">"} {key[1]}</span>
 })}
        </Container>;
    
      
  
}

export default DetailChampion;