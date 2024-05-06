import Book from "@/common/models/BookModel";
import connectDB from "./connect-db";

export async function getBooks() {
  try {
    const db = await connectDB();

    console.log("BOok", db);

    const books = await db.collection("books").find().lean().exec();

    return { books: books };
  } catch (error) {
    return { error };
  }
}
