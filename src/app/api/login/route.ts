import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";

export async function POST(request: NextRequest) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000/";
    const username = process.env.CMS_USERNAME;
    const password = process.env.CMS_PASSWORD;
    const siteId = process.env.CMS_SITE_ID;

    console.log("🔐 DEBUG - Env Variables:", {
      username,
      password: password ? password : "KOSONG",
      siteId,
      apiUrl,
    });

    const form = new FormData();
    form.append("Username", username || "");
    form.append("Password", password || "");
    form.append("SiteId", siteId || "");

    console.log("🔐 Server Login Request:", {
      apiUrl,
      endpoint: "api/Auth/Login",
      username,
      siteId,
      bodyType: "form-data",
    });

    const response = await fetch(`${apiUrl}api/Auth/Login`, {
      method: "POST",
      headers: form.getHeaders(),
      body: form,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("❌ Login Error - Status:", response.status);
      console.error("❌ Backend Response:", errorData);
      return NextResponse.json(
        {
          error: `Login failed with status ${response.status}`,
          details: errorData,
        },
        { status: response.status },
      );
    }

    const data = await response.json();
    console.log("✅ Login Success:", {
      userId: data?.userId,
      authToken: data?.authToken ? "***" : undefined,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("❌ Login Error:", error);
    return NextResponse.json({ error: "Failed to login" }, { status: 500 });
  }
}
