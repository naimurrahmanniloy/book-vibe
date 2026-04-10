import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCards from "../../Ui/ListedBookCards";

const ListedReadList = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks);

  return (
    <div>
      {storedBooks.map((book, ind) => {
        return <ListedBookCards book={book} key={ind} />;
      })}
    </div>
  );
};

export default ListedReadList;
