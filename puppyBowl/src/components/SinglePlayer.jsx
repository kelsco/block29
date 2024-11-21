import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { deletePlayer, fetchSinglePlayer } from "../API"

const styles = {
    image: {
        width: "400px",
        height: "auto",
        borderRadius: "10px",
    },
}

export default function SinglePlayer({ puppyId }){
    const navigation = useNavigate();
    const [puppy, setPuppy] = useState(null);

    useEffect(() => {
        async function fetchPuppy(id) {
            const puppers = await fetchSinglePlayer(id); 
            setPuppy(puppers)
        }
        fetchPuppy(puppyId);
    }, []);
return (
    <>
    <h2>Player Info</h2>
    <div className="info"> Pup-Pup-PUPPY.. Animal!?
        {
            puppy && (
                <div>
                    <div>Name: {puppy.name}</div>
                   
                    <div><img style={styles.image} src={puppy.imageUrl} alt={puppy.name} /> </div>
                     <div>Breed: {puppy.breed}</div>
                     <div>Team: TBD {puppy.team}</div>
                     <div>Owner: TBD {puppy.owner}</div>
                    <button onClick={(e) => navigation('/')}>Back to Home</button><br />
                    <button onClick={(e) => {deletePlayer(puppyId)
                        navigation('/')
                    }} 
>
                            Delete Player
                        </button>
                </div>
            )
        }

    </div>
    </>
);

}