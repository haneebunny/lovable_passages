// Type error: Route "src/app/api/auth/token/route.ts" has an invalid "GET" export:
//   Type "NextApiRequest" is not a valid type for the function's first argument.
//     Expected "NextRequest | Request", got "NextApiRequest".

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  if (!req)
    return NextResponse.json({
      text: "로그인 요청을 다시 한 번 확인해주세요.",
    });
  const token = await getToken({ req });
  if (token) {
    return NextResponse.json(token);
  } else {
    return NextResponse.json({ text: "로그인 상태가 아닙니다." });
  }

  return NextResponse.error();
}
