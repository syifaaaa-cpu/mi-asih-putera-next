import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const kanalType = searchParams.get("KanalType") || "K003";
    
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const response = await axios.get(`${apiUrl}api/content`, {
      params: { KanalType: kanalType },
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.error("Error proxying content from Golang:", error);
    return NextResponse.json({ data: [] }, { status: 500 });
  }
}