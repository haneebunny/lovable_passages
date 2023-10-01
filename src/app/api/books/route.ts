import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { bookSchema } from "@/common/models/book";

const MONGODB_URI = `${process.env.MONGO_CLIENT!}`;

const Book = mongoose.models["Book"] || mongoose.model("Book", bookSchema);

// Schema - Collection 대응
export async function GET(req: NextRequest, res: NextResponse) {
  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }

  const data = await Book.find().exec();
  console.log(data);
}
