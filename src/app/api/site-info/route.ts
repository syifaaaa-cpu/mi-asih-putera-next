import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function GET() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const token = (await cookies()).get("token")?.value;

    const response = await axios.get(`${apiUrl}api/SiteInformation`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        "Gagal mengambil data site info:",
        error.response.status,
        error.response.data,
      );
      return NextResponse.json(
        {
          error: `Backend error ${error.response.status}`,
          details: error.response.data,
        },
        { status: error.response.status },
      );
    }

    console.error("Gagal mengambil data site info:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data site info" },
      { status: 500 },
    );
  }
}
