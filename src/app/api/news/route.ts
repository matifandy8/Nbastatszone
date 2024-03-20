import { NextResponse } from "next/server";
import * as cheerio from "cheerio";
import playwright from "playwright";

async function fetchData() {
  try {
    const browser = await playwright.chromium.launch({
      headless: process.env.NODE_ENV === "production" ? true : false,
    });

    const context = await browser.newContext();
    const page = await context.newPage();
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
