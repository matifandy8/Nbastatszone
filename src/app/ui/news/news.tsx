import styles from "./news.module.css";
import NewsCard from "./newsCard";

export default function News() {
  return (
    <section className={styles.news}>
      <h1>News</h1>
      <div className={styles.newsContainer}>
        <NewsCard
          urlImage={
            "https://cdn.nba.com/manage/2024/03/GettyImages-2031357707.jpg?w=735&h=413"
          }
          title={"Cavs' Mitchell (knee treatment) out 3 games"}
        />
        <NewsCard
          urlImage={
            "https://cdn.nba.com/manage/2024/03/GettyImages-2031357707.jpg?w=735&h=413"
          }
          title={"Cavs' Mitchell (knee treatment) out 3 games"}
        />
        <NewsCard
          urlImage={
            "https://cdn.nba.com/manage/2024/03/GettyImages-2031357707.jpg?w=735&h=413"
          }
          title={"Cavs' Mitchell (knee treatment) out 3 games"}
        />
      </div>
    </section>
  );
}
