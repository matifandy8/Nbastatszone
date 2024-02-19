export const fetchPlayers = async () => {
  const response = await fetch("https://localhost:3000/api/players");
  const players = await response.json();
  console.log(players);
  return players.data;
};
