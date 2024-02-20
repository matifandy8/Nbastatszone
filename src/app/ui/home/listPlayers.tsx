import Image from "next/image";
import styles from "./listPlayers.module.css";

export default function ListPlayers({ data }: any) {
  return (
    <section className={styles.listplayers}>
      {data.length > 0 ? (
        data.map((player: any) => (
          <a
            href={
              player.firstname.toLowerCase() +
              "-" +
              player.lastname.toLowerCase()
            }
          >
            <div className={styles.card} key={player.id}>
              <Image
                src={player.image}
                alt={player.firstname}
                width={260}
                height={190}
              />
              <p className={styles.nameplayer} key={player.playerurl}>
                {player.firstname} {player.lastname}
              </p>
            </div>
          </a>
        ))
      ) : (
        <p>No Player found for your search</p>
      )}
    </section>
  );
}
