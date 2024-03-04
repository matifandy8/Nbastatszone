import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import github from "../../../../../public/github-icon.svg";
import logo from "../../../../../public/logo.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={40} height={40} />
          </Link>
        </h1>

        <div className={styles.links}>
          <a
            href="https://github.com/matifandy8/StatsPlayer"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <Image src={github} alt="GitHub" width={20} height={20} />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
