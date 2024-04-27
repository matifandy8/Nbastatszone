import styles from "./liveGames.module.css";
import Image from "next/image";

export default async function Game({ data }: any) {
  return (
    <div className={styles.game}>
      <div className={styles.time}>
        <span className={styles.timeText}>{data.time || "Today"}</span>
      </div>
      <div className={styles.teams}>
        <div className={styles.teamContainer}>
          <Image
            src={
              "../../images/logos-nba/logo-" + data.team.toLowerCase() + ".svg"
            }
            alt={data.team}
            width={20}
            height={20}
          />
          <div className={styles.team}>
            <span className={styles.teamName}>{data.team}</span>
            <span className={styles.teamScore}>{data.score}</span>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <Image
            src={
              "../../images/logos-nba/logo-" +
              data.teamtwo.toLowerCase() +
              ".svg"
            }
            alt={data.teamtwo + " logo"}
            width={20}
            height={20}
          />
          <div className={styles.team}>
            <span className={styles.teamName}>{data.teamtwo}</span>
            <span className={styles.teamScore}>{data.scoretwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
