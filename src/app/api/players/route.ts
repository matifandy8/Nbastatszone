import dataPlayers from "../../lib/data.json";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const fullname = searchParams.get("fullname");

  if (fullname) {
    return NextResponse.json(
      dataPlayers.filter(
        (player) =>
          player.firstname.toLowerCase() +
            "-" +
            player.lastname.toLowerCase() ===
          fullname
      )
    );
  }
  return NextResponse.json(dataPlayers);
}
