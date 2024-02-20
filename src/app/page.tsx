"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import InputSearchPlayer from "./ui/inputSearchPlayer/inputSearchPlayer";
import { teamBackgroundColors } from "./lib/themes";
import { fetchPlayers } from "./lib/fetch";
import ListPlayers from "./ui/home/listPlayers";

export default function Home() {
  const [players, setPlayers] = useState<any>([]);
  const [selectedTeam, setSelectedTeam] = useState("default");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);
  const searchPlayer = (playerName: string) => {
    const searchTerm = playerName.toLowerCase().trim();
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }
    const filteredPlayers = players.filter((player: any) => {
      const fullName = `${player.firstname} ${player.lastname}`.toLowerCase();
      return fullName.includes(searchTerm);
    });

    setSearchResults(filteredPlayers);
  };

  return (
    <main
      className={styles.main}
      style={{ backgroundImage: teamBackgroundColors[selectedTeam] }}
    >
      <h1 className={styles.title}>Search your player here</h1>
      <InputSearchPlayer
        selectedTeam={setSelectedTeam}
        onSearch={searchPlayer}
      />
      <ListPlayers data={searchResults} />
    </main>
  );
}
