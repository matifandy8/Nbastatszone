import { teamBackgroundColors } from "@/app/lib/themes";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";

export default async function Page({ params }: any) {
  const response = await fetch(
    `http://nbastatszone.vercel.app/api/players?fullname=${params.id}`
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
    <div
      className={styles.playerContainer}
      style={{ backgroundImage: teamBackgroundColors[player[0].team] }}
    >
      <div className={styles.player}>
        {TeamLogo && (
          <Image
            className={styles.teamLogo}
            src={TeamLogo}
            alt={player.team}
            width={190}
            height={190}
          />
        )}
        <div className={styles.playerPresentation}>
          <Image
            className={styles.image}
            src={player[0].image}
            alt={params.id}
            width={260}
            height={190}
          />
          <h1 className={styles.nameplayer}>
            <span className={styles.firstname}>{player[0].firstname}</span>{" "}
            {player[0].lastname}
            <span>{"#" + player[0].number}</span>
          </h1>
        </div>

        <div className={styles.info}>
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
        </div>
      </div>
      <div className={styles.playerStats}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th></th>
              <th className={styles.thTitle}>MPG</th>
              <th className={styles.thTitle}>FG%</th>
              <th className={styles.thTitle}>3P%</th>
              <th className={styles.thTitle}>FT%</th>
              <th className={styles.thTitle}>TRB</th>
              <th className={styles.thTitle}>AST</th>
              <th className={styles.thTitle}>STL</th>
              <th className={styles.thTitle}>BLK</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <th className={styles.th}>Career stats</th>
              <td className={styles.td}>23</td>
              <td className={styles.td}>11</td>
              <td className={styles.td}>11</td>
              <td className={styles.td}>11</td>
              <td className={styles.td}>12</td>
              <td className={styles.td}>3</td>
              <td className={styles.td}>2</td>
              <td className={styles.td}>1</td>
            </tr>
            <tr className={styles.tr}>
              <th className={styles.th}>Season stats</th>
              <td className={styles.td}>22</td>
              <td className={styles.td}>12</td>
              <td className={styles.td}>43</td>
              <td className={styles.td}>23</td>
              <td className={styles.td}>2</td>
              <td className={styles.td}>2</td>
              <td className={styles.td}>2.2</td>
              <td className={styles.td}>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.goback}>
        <Link href="/">
          <IoMdArrowRoundBack /> Go back
        </Link>
      </div>
    </div>
  );
}
