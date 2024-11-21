import { fetchPlayers, fetchSinglePlayer } from "../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import AddPlayer from "./AddPlayer.jsx";
import SinglePlayer from "./SinglePlayer.jsx";



export default function AllPlayers({puppyID, setPuppyId, }) {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const allPlayers = await fetchPlayers();
            setPlayers(allPlayers);
        }
        fetchData();
    }, []);

return (
    <div>
        <h2>  Puppy Bowl Presents</h2>
       <SearchBar players={players} setPuppyId={setPuppyId}/> 
       <AddPlayer />
        <ul className="pupperList">
      {players.length ? (
        players.map((player) => (
          <li className="pupper">
            <div key={player.id} onClick={(e) => {
            setPuppyId(player.id)
            navigate("/player")
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