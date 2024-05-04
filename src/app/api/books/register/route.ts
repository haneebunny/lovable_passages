import { Books } from "@/components/units/books/Books";
import { NextResponse } from "next/server";

// register book

export async function POST(req: NextResponse, res: NextResponse) {
  const { title, authors, publishedDate, createdAt } = req.body;

  try {
    const book = await Books.create({ title, authors, publishedDate });
    return NextResponse.json({ book, success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err, success: false });
  }
}
