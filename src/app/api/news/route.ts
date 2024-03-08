import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

let lastFetchTimestamp: number | undefined;

async function fetchData() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.espn.com/nba/");

    const html = await page.content();

    const $ = cheerio.load(html);

    const news: { title: string; imageUrl: string | undefined }[] = [];

    $(".contentItem__title.contentItem__title--story").each(
      (index, element) => {
        const title = $(element).text().trim();
        const imgSrc = $("picture.media-wrapper_image img").attr("src");
        news.push({ title, imageUrl: imgSrc });
      }
    );

    await browser.close();

    // Update the last fetch timestamp
    // lastFetchTimestamp = Date.now();

    return { news };
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

export async function GET(request: Request) {
  try {
    // Check if data needs to be fetched
    if (
      !lastFetchTimestamp ||
      Date.now() - lastFetchTimestamp >= 24 * 60 * 60 * 1000
    ) {
      const { news } = await fetchData();
      return NextResponse.json({ news }, { status: 200 });
    } else {
      // Return cached data if it's within the 24-hour interval
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
