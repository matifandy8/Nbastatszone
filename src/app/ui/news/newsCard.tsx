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
        width={160}
        height={90}
        style={{ objectFit: "scale-down" }}
        quality={100}
      />
      <h2>{title}</h2>
    </div>
  );
}
