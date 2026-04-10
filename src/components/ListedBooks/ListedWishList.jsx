import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCards from "../../Ui/ListedBookCards";

const ListedWishList = () => {
  const { wishListBooks } = useContext(BookContext);

  return (
    <div>
      {wishListBooks.map((book) => {
        return <ListedBookCards book={book} key={book.bookId} />;
      })}
    </div>
  );
};

export default ListedWishList;
