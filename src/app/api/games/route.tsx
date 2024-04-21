import { NextResponse } from "next/server";
import cheerio from "cheerio";

async function fetchLiveScores() {
  try {
    const response = await fetch("https://www.cbssports.com/nba/scoreboard");
    const html = await response.text();
    const $ = cheerio.load(html);

    const games: any = [];

    // Target the section containing live scores
    const liveScoreSection = $(".single-score-card");

    liveScoreSection.each((index, element) => {
      const time = $(element).find(".game-status").text();
      const id = $(element).attr("data-abbrev");
      const team = $(element).find(".team-name-link").eq(0).text();
      const score = $(element).find(".total").eq(1).text();
      const teamtwo = $(element).find(".team-name-link").eq(1).text();
      const scoretwo = $(element).find(".total").eq(2).text();

      games.push({
        time,
        id,
        team,
        score,
        teamtwo,
        scoretwo,
      });
    });

    return { games };
  } catch (error: any) {
    throw new Error(`An error occurred: ${error.message}`);
  }
}

export async function GET(request: Request) {
  try {
    const { games } = await fetchLiveScores();
    return NextResponse.json({ games }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
