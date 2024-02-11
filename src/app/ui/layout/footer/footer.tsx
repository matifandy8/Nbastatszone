import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024. All rights reserved.</p>
        <p>
          Powered by{" "}
          <a
            href="https://github.com/matifandy8/StatsPlayer"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            StatsPlayer
          </a>
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://github.com/matifandy8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Matias Fandiño
          </a>
        </p>
      </div>
    </footer>
  );
}
