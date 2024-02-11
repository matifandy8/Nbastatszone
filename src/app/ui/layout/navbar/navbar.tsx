import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">Player Stats</Link>
        </h1>

        <div className={styles.links}>
          <a
            href="https://github.com/matifandy8/StatsPlayer"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
