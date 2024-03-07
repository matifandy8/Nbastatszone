import styles from "./news.module.css";
import Image from "next/image";

interface NewsCardProps {
  urlImage: string;
  title: string;
}

export default function News({ urlImage, title }: NewsCardProps) {
  return (
    <div className={styles.item}>
      <Image
        className={styles.image}
        src={urlImage}
        alt={title}
        width={190}
        height={190}
        style={{ objectFit: "cover" }}
        quality={100}
      />
      <h2>{title}</h2>
    </div>
  );
}
