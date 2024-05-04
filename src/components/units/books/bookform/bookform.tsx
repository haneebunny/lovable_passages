"use client";

import axios from "axios";
import { useState } from "react";

function BookForm() {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  // 폼 제출 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/books", {
        title,
        authors: [{ name: authorName }],
        publishedDate: new Date(publishedDate),
      });

      alert("Book added successfully!");
      console.log(response.data);

      // 폼 초기화
      setTitle("");
      setAuthorName("");
      setPublishedDate("");
    } catch (error) {
      console.error("Failed to add the book:", error);
      alert("Failed to add the book.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Book</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author Name:</label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Published Date:</label>
        <input
          type="date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
