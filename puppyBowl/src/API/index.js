const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT"

export async function fetchPlayers() {
    const response = await fetch(`${API_URL}/players`);
    const data = await response.json();
    return data.data.players;
}

export async function fetchSinglePlayer(playerId) {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const data = await response.json();
    console.log('data: ,', data.data.player);
    return data.data.player;
}

export async function deletePlayer(playerId) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`, {
            method: "DELETE",
        });
        const data = await response.json();
    } catch (error) {
        console.error(error);
    }
}