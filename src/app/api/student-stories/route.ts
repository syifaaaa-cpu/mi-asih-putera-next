import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const response = await axios.get(`${apiUrl}api/content?KanalType=K003`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.error("Error fetching student stories from backend:", error);
    return NextResponse.json({ data: [] }, { status: 500 });
  }
}