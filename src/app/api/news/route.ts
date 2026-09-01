import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET(request: NextRequest) {
  return handleNews(request);
}

export async function POST(request: NextRequest) {
  return handleNews(request);
}

async function handleNews(request: NextRequest) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";

    // Ambil token dari cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "No session token found. Please login first." },
        { status: 401 },
      );
    }

    console.log("📤 Fetching news dengan token menggunakan Axios...");

    // Buat headers dengan Authorization Bearer token
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    // Forward cookies sebagai backup
    const allCookies = cookieStore.getAll();
    const cookieString = allCookies
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");
    if (cookieString) {
      headers["Cookie"] = cookieString;
    }

    // Menggunakan Axios untuk melakukan GET request ke backend
    const response = await axios.get(`${apiUrl}api/content?KanalType=K001`, {
      headers,
    });

    console.log(`📥 Backend response: ${response.status}`);
    return NextResponse.json(response.data);

  } catch (error: any) {
    console.error("❌ News API Route Error:", error);
    
    // Menangkap error dari respons Axios jika backend menolak
    if (error.response) {
      console.error("❌ Backend error:", error.response.status, error.response.data);
      return NextResponse.json(
        { error: `Backend error ${error.response.status}`, details: error.response.data },
        { status: error.response.status },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}