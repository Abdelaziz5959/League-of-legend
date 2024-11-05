import { useEffect, useState } from "react";
import ChampionService from "../Services/ChampionService";
import ChampionCard from "../Components/ChampionCard";
import { Container } from "react-bootstrap";

const HomePage = () => {

    const [champion, setChampion] = useState({})

    const fetchChampions = async () => {
        try {
            const response = await ChampionService.getAllChampions();
            // console.log(response.data.data);
            setChampion(response.data.data);


        } catch (error) {
            console.log(error);
        }
    }
    // useEffect evite les boucles infini
    useEffect(() => {
        fetchChampions()
    }, [])

    return <> <Container className="d-flex flex-column align-items-center">
        <h1>Champions</h1>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {Object.entries(champion).map((champion) => {
                return <ChampionCard championCard={champion[1]} key={champion[1].id}></ChampionCard>
            })}
        </div>
        </Container>
    </>
}


export default HomePage;