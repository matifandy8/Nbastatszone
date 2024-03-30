"use client";

import Link from "next/link";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Loading from "@/app/ui/loading/loading";

function Page({ params }: any) {
  const [post, setPost] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://nbastatszone.vercel.app/api/post?url=/stories/nba/${params.id}`
    );
    const data = await response.json();
    setLoading(false);
    setPost(data);
    if (!data || data.length === 0) {
      return <div>Post not found</div>;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.paragraphs}>
        <h1 className={styles.title}>{post?.title}</h1>
        {post?.image && (
          <Image
            src={post?.image}
            alt={post?.title}
            width={597}
            height={336}
            className={styles.image}
          />
        )}
        {loading ? (
          <div className={styles.loading}>
            <Loading />
          </div>
        ) : (
          post &&
          post.paragraphs?.map((paragraph: string, index: number) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))
        )}
      </div>
      <div>
        <Link href="/">
          <IoMdArrowRoundBack /> Go back
        </Link>
      </div>
    </div>
  );
}

export default Page;
