import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.MONGO_DB) {
      throw new Error("MONGO_DB 환경변수가 설정되지 않았습니다.");
    }

    const client = await connectDB;
    const booksCollection = client.db(process.env.MONGO_DB).collection("books");
    const books = await booksCollection.find().toArray();

    return NextResponse.json({ data: books });
  } catch (error) {
    console.error("Database access error:", error);
    return NextResponse.json({ error: error });
  }
}
// 240504 작동

export async function POST(request: NextRequest) {
  try {
    if (!process.env.MONGO_DB) {
      throw new Error("MONGO_DB 환경변수가 설정되지 않았습니다.");
    }

    const { title, authors, publishedDate } = await request.json();
    const client = await connectDB;
    const booksCollection = client.db(process.env.MONGO_DB).collection("books");

    const response = await booksCollection.insertOne({
      title,
      authors,
      publishedDate,
    });

    // 성공 응답
    return NextResponse.json({
      status: 201,
      message: "Book successfully created",
      data: response.insertedId,
    });
  } catch (error) {
    console.error("Failed to create a new book:", error);
    return NextResponse.json({
      status: "error",
      message: "Failed to create a new book",
      error: error,
    });
  }
}

// 작동
