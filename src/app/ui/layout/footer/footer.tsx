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
            href="https://github.com/matifandy8/Nbastatszone"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Image src={logo} alt="Logo" width={20} height={20} />
            <span className={styles.logoText}>Nbastatszone</span>
          </a>
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://matias-fandino.vercel.app/"
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
