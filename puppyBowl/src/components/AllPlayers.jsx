import { fetchPlayers } from "../API/index.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import '../src/images/Puppybowl1.webp'


<form >

</form>


export default function AllPlayers({puppyID, setPuppyId}) {
    const navigation = useNavigate();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const allPlayers = await fetchPlayers();
            setPlayers(allPlayers);
        }
        fetchData();
    }, []);
console.log("players: ", players);

return (
    <div>
        <h2>  Puppy Bowl Presents</h2>
        <ul className="pupperList">
      {players.length ? (
        players.map((player) => (
          <li className="pupper">
            <div key={player.id} onClick={(e) => {
            setPuppyId(player.id)
            navigation("/player")
          }}>  
            <h4>{player.name}</h4>
            <img id="dogimg" src={player.imageUrl} alt={player.name}/>
            <div className="breed">{player.breed}</div>
          </div>
          </li>
        ))
      ) : (
        <p>No players available</p> 
      )}</ul>
    </div>
  );
}