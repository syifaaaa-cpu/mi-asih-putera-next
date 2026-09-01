import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const creatioApiUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000";

    const response = await fetch(`${creatioApiUrl}/content/_list_content`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend returned ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching news from Cration:", error);
    return NextResponse.json(
      { error: "Failed to fetch news data" },
      { status: 500 },
    );
  }
}
