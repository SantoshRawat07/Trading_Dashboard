import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiUrl = "https://api.npstocks.com/npstocks/summary/market-summary";

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: "Bearer https://api.npstocks.com/npstocks/summary/market-summary", 
      },
    });

    if (!res.ok) {
      console.error("External API returned status:", res.status);
      return NextResponse.json({ error: `Failed to fetch data from external API: ${res.status}` });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Fetch to external API failed:", err);
    return NextResponse.json({ error: "Failed to fetch data from external API" });
  }
}
