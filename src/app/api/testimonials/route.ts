import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios from 'axios';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value; // Sesuaikan nama cookie token Anda

    const response = await axios.get('http://localhost:7000/api/content?KanalType=K010', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Gagal mengambil data testimoni', error: error.message },
      { status: 500 }
    );
  }
}