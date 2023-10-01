import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: NextRequest, res: NextResponse) {
  const MONGODB_URI = process.env.MongoClient!;

  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
}
