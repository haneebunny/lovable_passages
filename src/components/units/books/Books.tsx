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
    const fetchBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        console.log("response", response.data);
        setBooks(response?.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // 지금 데이터 서버->클라 두 번 거쳐서 오는데 굳이???

  console.log("뚜루루", books);
  return (
    <div>
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
