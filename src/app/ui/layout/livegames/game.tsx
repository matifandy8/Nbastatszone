import styles from "./liveGames.module.css";
import Image from "next/image";

export default function Game({ data }: any) {
  return (
    <div className={styles.game}>
      <div className={styles.time}>
        <span className={styles.timeText}>{data.time}</span>
      </div>
      <div className={styles.teams}>
        <div className={styles.teamContainer}>
          <Image src={data.image} alt="" width={20} height={20} />
          <div className={styles.team}>
            <span className={styles.teamName}>{data.team}</span>
            <span className={styles.teamScore}>{data.score}</span>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <Image src={data.imagetwo} alt="" width={20} height={20} />
          <div className={styles.team}>
            <span className={styles.teamName}>{data.teamtwo}</span>
            <span className={styles.teamScore}>{data.scoretwo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
