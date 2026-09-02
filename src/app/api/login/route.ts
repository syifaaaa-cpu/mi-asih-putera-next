import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const username = process.env.CMS_USERNAME;
    const password = process.env.CMS_PASSWORD;
    const siteId = process.env.CMS_SITE_ID;

    if (!username || !password || !siteId) {
      console.warn(
        "CMS login dilewati: CMS_USERNAME, CMS_PASSWORD, atau CMS_SITE_ID belum dikonfigurasi.",
      );
      return NextResponse.json({ authenticated: false });
    }

    const formData = new FormData();
    formData.append("Username", username || "");
    formData.append("Password", password || "");
    formData.append("SiteId", siteId || "");

    const response = await fetch(`${apiUrl}api/Auth/Login`, {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text();
    if (!response.ok) {
      console.warn(`CMS login gagal dengan status ${response.status}.`);
      return NextResponse.json({ authenticated: false });
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
  } catch {
    console.warn("CMS login tidak tersedia.");
    return NextResponse.json({ authenticated: false });
  }
}
