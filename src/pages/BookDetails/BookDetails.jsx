import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

  console.log(books);
  const individualBook = books.find((book) => book.bookId == bookId);
  console.log(individualBook);
  return (
    <div>
      <h1>Book Details</h1>
      <div className="container mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-sm p-10">
          <figure>
            <img
              className="w-425 h-141"
              src={individualBook.image}
              alt="Album"
            />
          </figure>
          <div className="card-body gap-5">
            <h2 className="card-title">{individualBook.bookName}</h2>
            <p className="border-b">By: {individualBook.author}</p>
            <p className="border-b">By: {individualBook.category}</p>
            <p>
              <span className="font-semibold">Review:</span>
              {"   "}
              {individualBook.review}
            </p>
            <div className="flex gap-4 border-b">
              {" "}
              <span className="font-semibold">Tag:</span>
              {individualBook.tags.map((tag) => (
                <div className="badge badge-soft badge-success">{tag}</div>
              ))}
            </div>
            <p>
              <span className="font-semibold">Number Of Pages:</span> {"  "}
              {individualBook.totalPages}
            </p>
            <p>
              <span className="font-semibold">Publisher:</span> {"  "}
              {individualBook.author}
            </p>
            <p>
              <span className="font-semibold">Year of Publishing:</span> {"  "}
              {individualBook.yearOfPublishing}
            </p>
            <p>
              <span className="font-semibold">Rating:</span>
              {"  "}
              {individualBook.rating}
            </p>
            <div className="justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
