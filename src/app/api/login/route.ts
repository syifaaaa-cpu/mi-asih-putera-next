import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const username = process.env.CMS_USERNAME;
    const password = process.env.CMS_PASSWORD;
    const siteId = process.env.CMS_SITE_ID;

    // Cek Variabel ENV
    console.log("🔍 Cek Variabel ENV:", { username, password, siteId });

    const formData = new FormData();
    formData.append("Username", username || "");
    formData.append("Password", password || "");
    formData.append("SiteId", siteId || "");

    // Cek isi data yang akan dikirim
    console.log("📤 Mengirim ke Go Fiber:", {
      url: `${apiUrl}api/Auth/Login`,
      username,
      password: password ? "ADA_PASSWORD" : "KOSONG",
      siteId
    });

    const response = await fetch(`${apiUrl}api/Auth/Login`, {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text();
    console.log("📥 Respon dari Go Fiber:", response.status, responseText);

    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend error ${response.status}`, details: responseText },
        { status: response.status }
      );
    }

    const data = JSON.parse(responseText);

    // Ambil token dari respons backend Go Fiber dan simpan ke Cookies
    const token = data?.Data?.Token;
    if (token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // Berlaku 1 hari
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Route Handler Error:", error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}