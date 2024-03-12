import { useEffect, useState } from "react";
import styles from "./news.module.css";
import NewsCard from "./newsCard";
import Loading from "../loading/loading";
interface NewsData {
  news: {
    imageUrl: string;
    title: string;
  }[];
}
export default function News() {
  const [dataNews, setDataNews] = useState({ news: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const cachedData = localStorage.getItem("newsData");
      const cachedTimestamp = localStorage.getItem("newsTimestamp");
      const currentTime = new Date().getTime();
      const halfDay = 12 * 60 * 60 * 1000;

      if (cachedData && cachedTimestamp) {
        const cachedTime = parseInt(cachedTimestamp, 10);
        if (currentTime - cachedTime < halfDay) {
          setDataNews(JSON.parse(cachedData));
          setLoading(false);
          return;
        }
      }

      const res = await fetch("/api/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      localStorage.setItem("newsData", JSON.stringify(data));
      localStorage.setItem("newsTimestamp", currentTime.toString());
      setDataNews(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className={styles.news}>
      <h1>News</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.newsContainer}>
          {dataNews.news.map((news, index) => (
            <NewsCard key={index} urlImage={news.imageUrl} title={news.title} />
          ))}
        </div>
      )}
    </section>
  );
}
