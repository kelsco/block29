import React, { useState } from "react";


export default function AddPlayer() {
    const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT";
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState(""); // To show success or error messages
    

    async function handleSubmit(e) {
        e.preventDefault();
        
        // Check if all fields are filled
        if (!name || !breed || !imageUrl) {
            setMessage("All fields are required!");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/players`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    breed,
                    imageUrl,
                }),
            });

            // Handle the response and check if the response is successful
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                setMessage("Player added successfully!"); // Success message

                setName(""); // Optionally reset form fields
                setBreed("");
                setImageUrl("");
                history.go(0);
            } else {
                setMessage("Failed to add player. Try again.");
            }
        } catch (error) {
            console.error("Error adding player:", error);
            setMessage("An error occurred while adding the player.");
        }
    }

    return (
        <> 
            
            <form className="addPlayer" onSubmit={handleSubmit}><br />
               
                <div><div><h3>Add New Player</h3></div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Breed:
                        <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add Player</button>
            </form>
            {message && <p>{message}</p>} {/* Display success or error message */}
        </>
    );
}