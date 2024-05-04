import Book from "@/common/models/BookModel";
import connectDB from "./connect-db";

export async function getBooks() {
  try {
    await connectDB();

    console.log("BOok", Book);
    const books = await Book.find().lean().exec();

    return { books: books };
  } catch (error) {
    return { error };
  }
}
