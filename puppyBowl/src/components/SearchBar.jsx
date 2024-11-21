import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export default function SearchBar({ players, setPuppyId }) {
    const [search, setSearch] = useState("");
    const [foundPuppy, setFoundPuppy] = useState(null);
    const navigate = useNavigate();
        
    function handleSubmit(e) {
            e.preventDefault();
            setFoundPuppy(players.find((pup) => 
                pup.name.toLowerCase().includes(search.toLowerCase())
        ))
        }
    


    return (
        <>
        <form className="searchBar" onSubmit={handleSubmit}>
        <label>
            Find Puppy: {" "}
            <input 
            type="text" 
            placeholder="Search players by name"
            value={search} 
            onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        </label>
        <button>Search</button>
        </form>
        {/* {foundPuppy && <div><h2>{foundPuppy.name}</h2> <h2>{foundPuppy.breed} </h2>
            <img id="dogimg" src={foundPuppy.imageUrl} />
            </div>} */}


          {foundPuppy &&      
                <div className="searchPups" key={foundPuppy.id} onClick={(e) => {
            setPuppyId(foundPuppy.id)
            navigate("/player")
          }}>  
          <li className="pupper">
            <h4>{foundPuppy.name}</h4>
            <img id="foundPuppy" src={foundPuppy.imageUrl} alt={foundPuppy.name}/>
            <div className="breed">{foundPuppy.breed}</div>
         </li>
         </div>
             }
        
        </>
    );
}