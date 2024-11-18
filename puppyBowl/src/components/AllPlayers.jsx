import { fetchPlayers } from "../API/index.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

      {players.length ? (
        players.map((player) => (
          <div key={player.id} onClick={(e) => {
            setPuppyId(player.id)
            navigation("/player")
          }}>  
            <h4>{player.name}</h4>
            <img id="dogimg" src={player.imageUrl} alt={player.name}/>
          </div>
        ))
      ) : (
        <p>No players available</p> 
      )}
    </div>
  );
}