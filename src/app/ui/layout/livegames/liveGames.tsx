import Game from "./game";
import styles from "./liveGames.module.css";
import Image from "next/image";

export default async function LiveGames() {
  const games = [
    {
      time: "2:00",
      image: "/images/logos-nba/logo-heat.svg",
      team: "Heat",
      score: "110",
      imagetwo: "/images/logos-nba/logo-celtics.svg",
      teamtwo: "Celtics",
      scoretwo: "120",
    },
    {
      time: "2:00",
      image: "/images/logos-nba/logo-celtics.svg",
      team: "Celtics",
      score: "120",
      imagetwo: "/images/logos-nba/logo-heat.svg",
      teamtwo: "Heat",
      scoretwo: "110",
    },
  ];

  if (!games || games.length === 0) {
    return <div>Games not found or not games today</div>;
  }

  return (
    <section className={styles.livegamescontainer}>
      <p className={styles.date}>{new Date().toLocaleDateString()}</p>
      <div className={styles.livegames}>
        {games &&
          games.map((data: any) => <Game key={data.time} data={data} />)}
      </div>
    </section>
  );
}
