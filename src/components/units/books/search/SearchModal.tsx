/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";
import { extractFirstSentence } from "../../../../../utils/textUtils";
import {
  IBook,
  IBookInfo,
  IBookItemProps,
  IBooksListProps,
  ISearchModalProps,
} from "../bookTypes";
import { useSetRecoilState } from "recoil";
import { selectedBooksState } from "@/common/store/atom";

const SearchModal = ({ setIsModalOpen }: ISearchModalProps) => {
  const [searchType, setSearchType] = useState("all"); // all, title, author
  const [query, setQuery] = useState("");
  const [bookInfo, setBookInfo] = useState<IBookInfo>();

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(`Searching for ${query} by ${searchType}`);

    const data = await axios.get("/api/books/search", {
      params: { query, searchType },
    });

    setBookInfo(data?.data);

    // data.data.documents - Array
    // data.data.meta - Object (is_end, pageable_count, total_count)
  };

  //   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh]">
        <h2 className="text-lg font-bold mb-4">Search Books</h2>
        <form
          onSubmit={handleSearch}
          className="space-y-3 flex flex-row items-center"
        >
          <div className="flex flex-row">
            <div>
              <select
                id="searchType"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="mt-1 block w-full text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="all">All</option>
                <option value="title">제목</option>
                <option value="person">인명</option>
                <option value="publisher">출판사</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter search text..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
          <div></div>
        </form>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>

        <div>
          <p>
            {bookInfo
              ? `${bookInfo.data.meta.total_count}개의 검색결과가 있습니다.`
              : "검색하쇼"}
          </p>
          <BooksList books={bookInfo?.data.documents || []} />
        </div>
      </div>
    </div>
  );
};

const BooksList = ({ books }: IBooksListProps) => {
  if (!books) return <div>No books found.</div>;

  return (
    <div className="container mx-auto px-4 max-h-60 overflow-y-auto">
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
    </div>
  );
};

const BookItem = ({ book }: IBookItemProps) => {
  const setSelectedBooksState = useSetRecoilState(selectedBooksState);

  // 책 선택했을 때 books 배열에 추가하는 함수
  // 배열에 추가 후 ok -> searchModal 닫기
  const handleSelectBook = (bookData: IBook) => {
    setSelectedBooksState((prevBooks) => [...prevBooks, bookData]);
  };
  return (
    <div
      onClick={() => handleSelectBook(book)}
      className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow my-2"
    >
      <img
        src={book.thumbnail}
        alt={book.title}
        className="w-20 h-30 object-cover rounded"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-xl font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.authors.join(", ")}</p>
        <p className="text-gray-500">{book.publisher}</p>
        <p className="text-gray-400 text-sm">
          {extractFirstSentence(book.contents)}
        </p>
      </div>
    </div>
  );
};

export default SearchModal;
