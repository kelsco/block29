import { useState } from "react";

export default function SearchBar({ players }) {
    const [search, setSearch] = useState("");
    const [foundPuppy, setFoundPuppy] = useState(null);
        
    function handleSubmit(e) {
            e.preventDefault();
            setFoundPuppy(players.find((pup) => 
                pup.name.toLowerCase().includes(search.toLowerCase())
        ))
        }
    


    return (
        <>
        <form onSubmit={handleSubmit}>
        <label>
            Find Puppy {" "}
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
        {foundPuppy && <div>{foundPuppy.name}</div>}
        </>
    );
}