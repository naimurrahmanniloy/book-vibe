import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div>
      <Link
        to={`/bookDetails/${book.bookId}`}
        className="card bg-base-100 shadow-sm"
      >
        <figure className="p-6">
          <img src={book.image} className="rounded-xl h-62.5" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {book.tags.map((tag, ind) => {
              return (
                <div key={ind} className="badge badge-soft badge-success">
                  {tag}
                </div>
              );
            })}
          </div>
          <h2 className="card-title font-bold text-2xl">{book.bookName}</h2>
          <p className="text-lg">By: {book.author}</p>

          <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300">
            <div className="font-semibold text-[16px]">{book.category}</div>
            <div className="flex gap-2 items-center text-[15px]">
              {book.rating} <FaRegStar />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
