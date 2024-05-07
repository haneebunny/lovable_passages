// kakao api 이용

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const REST_API_KEY = process.env.KAKAO_REST_API_KEY;

  if (!REST_API_KEY) {
    throw new Error("KAKAO_REST_API_KEY를 확인해주세요.");
  }

  const params = await request.nextUrl.searchParams; // 쿼리 파라미터 'query' 추출

  const config = {
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
    params,
  };

  try {
    const response = await axios.get(
      "https://dapi.kakao.com/v3/search/book",
      config
    );
    return NextResponse.json({
      data: response.data,
    });
  } catch (error) {
    console.error("Kakao API error:", error);
    return NextResponse.json({ message: "Error fetching data from Kakao API" });
  }
}
