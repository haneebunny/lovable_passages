import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await getToken({ req });
    if (token) {
      return NextResponse.json(token);
    } else {
      return NextResponse.json({ text: "로그인 상태가 아닙니다." });
    }
  } catch (error) {
    return NextResponse.error();
  }
}
