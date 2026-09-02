import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const token = (await cookies()).get("token")?.value;

    const response = await axios.get(`${apiUrl}api/content?KanalType=K005`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    console.error("Gagal mengambil data program unggulan:", error);
    return NextResponse.json(
      { message: "Gagal memuat data program unggulan" },
      { status: 500 }
    );
  }
}