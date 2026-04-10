import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  const handleReadBooks = (currentBook) => {
    console.log(currentBook);

    const isExisted = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExisted) {
      toast.error("book is already existed");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(
        `Successfully added the Book ${currentBook.bookName} to read list`,
      );
    }
  };

  const handleWishlistBooks = (currentBook) => {
    console.log(currentBook);

    const isExistedOnReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistedOnReadList) {
      toast.error(
        `The book ${currentBook.bookName} is already exist on read list`,
      );
      return;
    }

    const isExisted = wishListBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExisted) {
      toast.error("book is already existed");
    } else {
      setWishListBooks([...storedBooks, currentBook]);
      toast.success(
        `Successfully added the Book ${currentBook.bookName} to wishlist`,
      );
    }
  };

  const data = {
    handleReadBooks,
    storedBooks,
    setStoredBooks,
    handleWishlistBooks,
    wishListBooks,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
