import { teamBackgroundColors } from "@/app/lib/themes";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

export default async function Page({ params }: any) {
  const response = await fetch(
    `http://localhost:3000/api/players?fullname=${params.id}`
  );
  const player = await response.json();

  if (!player || player.length === 0) {
    return <div>Player not found</div>;
  }

  const teamName = player[0].team ? player[0].team.toLowerCase() : "";

  const TeamLogo = await import(
    `../../../../public/images/logos-nba/logo-${teamName}.svg`
  )
    .then((module) => module.default)
    .catch((error) => null);

  return (
    <div className={styles.playerContainer}>
      <div
        className={styles.player}
        style={{ backgroundImage: teamBackgroundColors[player[0].team] }}
      >
        <img className={styles.image} src={player[0].image} alt={params.id} />
        {TeamLogo && (
          <Image src={TeamLogo} alt={player.team} width={260} height={190} />
        )}
        <div className={styles.info}>
          <h1 className={styles.nameplayer}>
            <span className={styles.firstname}>{player[0].firstname}</span>{" "}
            {player[0].lastname}
          </h1>
          <p className={styles.infoText}>
            <span className={styles.span}>Team: </span>
            {player[0].team}
          </p>
          <p className={styles.infoText}>
            <span className={styles.span}>Position: </span>
            {player[0].position}
          </p>
          <p className={styles.infoText}>
            <span className={styles.span}>Height: </span>
            {player[0].height}
          </p>
          <p className={styles.infoText}>
            <span className={styles.span}>Weight: </span>
            {player[0].weight}
          </p>
          <p className={styles.infoText}>
            <span className={styles.span}>Country: </span> {player[0].country}
          </p>
          <p className={styles.infoText}>
            <span className={styles.span}>Last attended: </span>{" "}
            {player[0].lastattended}
          </p>
          <p className={styles.infoText}>
            <span className={styles.span}>Number: </span> {player[0].number}
          </p>
        </div>
      </div>
      <div className={styles.goback}>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
}
