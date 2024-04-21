import Game from "./game";
import styles from "./liveGames.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/games");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function LiveGames() {
  const { games } = await getData();

  if (!games || games.length === 0) {
    return <div>Games not found or not games today</div>;
  }

  return (
    <section className={styles.livegamescontainer}>
      <p className={styles.date}>{new Date().toLocaleDateString()}</p>
      <div className={styles.livegames}>
        {games && games.map((data: any) => <Game key={data.id} data={data} />)}
      </div>
    </section>
  );
}
