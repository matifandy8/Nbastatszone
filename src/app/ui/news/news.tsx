import { useEffect, useState } from "react";
import styles from "./news.module.css";
import NewsCard from "./newsCard";
import datajson from "./data.json";

export default function News() {
  const [dataNews, setDataNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      setDataNews(data);
    };

    fetchData();
  }, []);

  return (
    <section className={styles.news}>
      <h1>News</h1>
      <div className={styles.newsContainer}>
        {dataNews.news?.map((item) => (
          <NewsCard
            key={item.title}
            urlImage={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}
