import axios from "axios"

function getDetailItem(){
    return axios.get("https://ddragon.leagueoflegends.com/cdn/14.21.1/data/fr_FR/item.json")
  };

  export default { getDetailItem }