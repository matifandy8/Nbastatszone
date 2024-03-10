import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

let lastFetchTimestamp: number | undefined;

async function fetchData() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.foxsports.com/nba");

    const html = await page.content();

    const $ = cheerio.load(html);

    const news: { title: string; imageUrl: string | undefined }[] = [];

    $("a.news-article").each((index, element) => {
      const imageUrl = $(element).find("img.image-article").attr("src");
      const title = $(element).find("h3.article-title").text().trim();
      news.push({ title, imageUrl });
    });

    await browser.close();

    // Actualiza la marca de tiempo de la última búsqueda
    // lastFetchTimestamp = Date.now();

    return { news };
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

export async function GET(request: Request) {
  try {
    // Verifica si es necesario obtener datos nuevos
    if (
      !lastFetchTimestamp ||
      Date.now() - lastFetchTimestamp >= 24 * 60 * 60 * 1000
    ) {
      const { news } = await fetchData();
      return NextResponse.json({ news }, { status: 200 });
    } else {
      return NextResponse.json(
        {
          message:
            "Data fetched within the last 24 hours. Returning cached data.",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
