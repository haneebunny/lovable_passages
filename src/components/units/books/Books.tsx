// src/components/units/books/Books.tsx
"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface iBookType {
  _id: string;
  title: string;
  authors: string[];
}

export default function Books() {
  const [books, setBooks] = useState<iBookType[]>([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get("/api/books");
        console.log(response);
        setBooks(response.data.books);
        console.log("Book page", response.data.books);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    }
    fetchBooks();
    console.log(books);
  }, []);

  return (
    <div>
      <Link href="/books/new">
        <h1>추가</h1>
      </Link>
      <h1>BOOK</h1>
      <div>
        {books?.map((book: iBookType) => (
          <div key={book._id}>
            <div className="w-10 h-10 bg-yellow-200">
              <Link href={`/books/${book._id}`}>{book.title}</Link>
            </div>
            <span>{book.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
