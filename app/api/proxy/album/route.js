import { NextResponse } from "next/server";

export async function GET() {
  const targetUrl =
    "https://fa77-27-34-90-109.ngrok-free.app/api/v1/album/?format=json";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        Accept: "application/json",
      },
      // Optionally set cache: 'no-store' if you're debugging and don't want it cached
      cache: "no-store",
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Proxy failed", details: error.message },
      { status: 500 },
    );
  }
}
