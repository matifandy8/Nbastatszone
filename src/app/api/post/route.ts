import { NextResponse } from "next/server";
import cheerio from "cheerio";

async function fetchParagraphs(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const urlPost = searchParams.get("url");

  if (!urlPost) {
    throw new Error("URL not found");
  }
  try {
    const response = await fetch(`https://www.foxsports.com/${urlPost}`);
    const html = await response.text();
    const $ = cheerio.load(html);

    const paragraphs: string[] = [];
    const title = $("h1").text().trim();
    const image = $("img[class='image-story']").attr("srcset");

    $("p").each((index, element) => {
      const paragraphText = $(element).text().trim();
      paragraphs.push(paragraphText);
    });

    return { title, paragraphs, image };
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

export async function GET(request: Request) {
  try {
    const paragraphs = await fetchParagraphs(request);
    return NextResponse.json(paragraphs, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
