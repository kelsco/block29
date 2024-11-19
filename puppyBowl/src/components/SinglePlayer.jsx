import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { fetchSinglePlayer } from "../API/index.js"

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
    <div className="info" onClick={(e) => navigation('/')}> Pup-Pup-PUPPY DOG!
        {
            puppy && (
                <div>
                    <div>Name: {puppy.name}</div>
                    <div>Breed: {puppy.breed}</div>
                    <div><img style={styles.image} src={puppy.imageUrl} alt={puppy.name} /> </div>
                    <div>Team: {puppy.team}</div>
                </div>
            )
        }

    </div>
    </>
);

}