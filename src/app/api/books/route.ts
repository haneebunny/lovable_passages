import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import Book from "@/common/models/BookModel";
import connectDB from "../../../../lib/connect-db";

export async function GET(request: Request) {
  try {
    await connectDB();
    const books = await Book.find().lean().exec();
    return NextResponse.json({ books });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}

// 240504 작동

export async function POST(request: Request, response: NextApiResponse) {
  try {
    await connectDB();
    const { title, authors, publishedDate } = await request.json();

    // 새 책 객체 생성
    const newBook = new Book({
      title,
      authors,
      publishedDate,
      createdAt: new Date(), // 현재 시간을 생성일로 설정
    });

    // 데이터베이스에 저장
    const savedBook = await newBook.save();

    // 성공 응답
    return NextResponse.json({
      status: "success",
      message: "Book successfully created",
      data: savedBook,
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
