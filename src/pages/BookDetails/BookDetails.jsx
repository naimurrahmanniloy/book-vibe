import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

  const individualBook = books.find((book) => book.bookId == bookId);

  const { handleReadBooks, handleWishlistBooks } = useContext(BookContext);

  return (
    <div className="mt-20 ">
      <div className="container mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-sm p-10 rounded-xl">
          <figure className="bg-gray-600">
            <img
              className="w-425 h-141"
              src={individualBook.image}
              alt="Album"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title text-2xl">{individualBook.bookName}</h2>
            <p className="border-b text-lg">By : {individualBook.author}</p>
            <p className="border-b text-lg"> {individualBook.category}</p>
            <p>
              <span className="font-bold ">Review:</span>
              {"   "}
              {individualBook.review}
            </p>
            <div className="flex gap-4 border-b">
              {" "}
              <span className="font-bold">Tag:</span>
              {individualBook.tags.map((tag) => (
                <div className="badge badge-soft badge-success">#{tag}</div>
              ))}
            </div>
            <p className="font-semibold">
              <span className=" text-gray-400">Number Of Pages:</span> {"  "}
              {individualBook.totalPages}
            </p>
            <p className="font-semibold">
              <span className=" text-gray-400">Publisher:</span> {"  "}
              {individualBook.author}
            </p>
            <p className="font-semibold">
              <span className=" text-gray-400">Year of Publishing:</span> {"  "}
              {individualBook.yearOfPublishing}
            </p>
            <p className="font-semibold">
              <span className=" text-gray-400">Rating:</span>
              {"  "}
              {individualBook.rating}
            </p>
            <div className="justify-end">
              <button
                className="btn mr-3 "
                onClick={() => handleReadBooks(individualBook)}
              >
                Read
              </button>
              <button
                onClick={() => handleWishlistBooks(individualBook)}
                className="btn bg-[#50B1C9] text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
