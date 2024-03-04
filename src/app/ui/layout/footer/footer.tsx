import styles from "./footer.module.css";
import Image from "next/image";
import logo from "../../../../../public/logo.png";

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
            <Image src={logo} alt="Logo" width={20} height={20} />
            <span>Nbastatszone</span>
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
