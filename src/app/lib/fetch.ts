export const fetchPlayers = async () => {
  const response = await fetch("http://localhost:3000/api/players");
  const players = await response.json();
  return players;
};
