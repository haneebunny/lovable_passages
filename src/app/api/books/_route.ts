import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// fetch books
export async function GET(req: Request, res: Response) {
  try {
    const client = await MongoClient.connect(process.env.MONGO_CLIENT!);
    const database = client.db("lovablePassages");
    const bookCollection = database.collection("book");

    const cursor = bookCollection.find({});
    const allValues = await cursor.toArray();

    console.log(allValues);
    client.close();

    return NextResponse.json(allValues);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    return NextResponse.json({ message: "This Worked", success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err, success: false });
  }
}
