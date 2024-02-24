import Image from "next/image";
import styles from "./listPlayers.module.css";
import { PlayerInfo } from "@/app/lib/types";
import { teamBackgroundColors } from "@/app/lib/themes";
import { useState } from "react";

export default function ListPlayers({ data }: any) {
  const [selectedTeam, setSelectedTeam] = useState("default");

  return (
    <section className={styles.listplayers}>
      {data.length > 0 ? (
        data.map((player: PlayerInfo) => (
          <div
            className={styles.card}
            key={player.playerurl}
            style={{ backgroundImage: teamBackgroundColors[player.team] }}
          >
            <a
              href={`/player/${
                player.firstname.toLowerCase() +
                "-" +
                player.lastname.toLowerCase()
              }`}
            >
              <Image
                src={player.image}
                alt={player.firstname}
                width={260}
                height={190}
              />
              <p className={styles.nameplayer} key={player.playerurl}>
                {player.firstname} {player.lastname}
              </p>
            </a>
          </div>
        ))
      ) : (
        <p>No Player found for your search</p>
      )}
    </section>
  );
}
