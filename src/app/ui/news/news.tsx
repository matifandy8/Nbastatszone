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
  const [dataNews, setDataNews] = useState<NewsData>({ news: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch("/api/news", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setLoading(false);
      setDataNews(data);
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
