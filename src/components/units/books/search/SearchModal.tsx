import axios from "axios";
import React, { useState } from "react";

interface IBook {
  title: string;
  contents: string;
  authors: string[];
  datetime: string;
  publisher: string;
  thumbnail: string;
}

interface IBookInfo {
  data: {
    documents: IBook[];
    meta: {
      is_end: boolean;
      pageabe_count: number;
      total_count: number;
    };
  };
}

const SearchModal = ({}) => {
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

    console.log(data?.data);

    // data.data.documents - Array
    // data.data.meta - Object (is_end, pageable_count, total_count)
  };

  //   if (!isOpen) return null;

  console.log(bookInfo?.data);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
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
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
          Close
        </button>

        <div>
          <p>
            {bookInfo
              ? `${bookInfo.data.meta.total_count}개의 검색결과가 있습니다.`
              : "검색하쇼"}
          </p>
        </div>
      </div>
    </div>
  );
};

const Result = ({ book }) => {
  return (
    <div>
      <div>
        <div>이미지</div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchModal;
