import { NextResponse } from "next/server";

const API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "Bangkok";
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "OPENWEATHER_API_KEY is not configured" }, { status: 500 });
  }

  const params = new URLSearchParams({
    q: city,
    appid: apiKey,
    units: "metric",
    lang: "th",
  });

  try {
    const res = await fetch(`${API_URL}?${params.toString()}`);
    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch forecast data" }, { status: 500 });
  }
}
