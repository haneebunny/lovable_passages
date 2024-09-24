export interface IBook {
  title: string;
  contents: string;
  authors: string[];
  datetime: string;
  publisher: string;
  thumbnail: string;
  isbn: string;
}

export interface IBookInfo {
  data: {
    documents: IBook[];
    meta: {
      is_end: boolean;
      pageabe_count: number;
      total_count: number;
    };
  };
}

export interface IBooksListProps {
  books: IBook[];
}

export interface IBookItemProps {
  book: IBook;
}

export interface ISearchModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
