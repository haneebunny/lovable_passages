// app/api/boards/create-post.ts
import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/connect-db";

export async function POST(req: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("lovablePassages"); // 데이터베이스 이름을 설정하세요

    // JSON 파싱이 필요한 경우, 요청 본문을 JSON으로 파싱합니다.
    const data =
      req.body && typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body;
    const response = await db.collection("boards").insertOne(data);

    NextResponse.json({
      status: "success",
      message: "Post created successfully",
      postId: response.insertedId,
    });
  } catch (error) {
    console.error("Failed to create post:", error);
    NextResponse.json({ status: "error", message: "Internal Server Error" });
  }
}
