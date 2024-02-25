export const fetchPlayers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/players");
    if (!response.ok) {
      throw new Error("Failed to fetch players");
    }
    const players = await response.json();
    return players;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error; 
  }
};
