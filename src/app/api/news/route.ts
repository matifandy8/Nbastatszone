import { NextResponse } from "next/server";
import cheerio from "cheerio";

async function fetchData() {
  try {
    const response = await fetch("https://www.foxsports.com/nba");
    const html = await response.text();
    const $ = cheerio.load(html);

    const news: any = [];

    $("a.news-article").each((index, element) => {
      const imageUrl = $(element).find("img.image-article").attr("src");
      const title = $(element).find("h3.article-title").text().trim();
      const href = $(element).attr("href");
      news.push({ title, imageUrl, href });
    });

    return { news };
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

export async function GET(request: Request) {
  try {
    const { news } = await fetchData();
    return NextResponse.json({ news }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
