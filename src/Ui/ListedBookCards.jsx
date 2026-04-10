import { FileText, MapPin, Users } from "lucide-react";
import React from "react";

const ListedBookCards = ({ book }) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto p-4 bg-white border border-gray-100 rounded-3xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
        {/* Book Image Section */}
        <div className="bg-gray-100 p-8 rounded-2xl flex items-center justify-center w-full md:w-48 h-64 shrink-0">
          <img
            src={book.image}
            alt="Book Cover"
            className="h-full object-contain shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 w-full space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-serif">
              {book.bookName}
            </h2>
            <p className="text-gray-600 mt-1">
              By : <span className="font-medium">{book.author}</span>
            </p>
          </div>

          {/* Tags and Meta Info */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-semibold">Tag</span>
              {book.tags.map((tag, ind) => {
                return (
                  <span
                    className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
                    key={ind}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-sm">
              <MapPin size={16} />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-500 text-sm border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
              <Users size={18} />
              <span>Publisher: {book.publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} />
              <span>Page {book.totalPages}</span>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t">
            <span className="bg-blue-50 text-blue-500 px-5 py-2 rounded-full text-sm font-medium">
              Category: {book.category}
            </span>
            <span className="bg-orange-50 text-orange-400 px-5 py-2 rounded-full text-sm font-medium">
              Rating: {book.rating}
            </span>
            <button className="bg-[#22C55E] hover:bg-green-600 text-white px-8 py-2 rounded-full font-semibold transition-colors ml-auto">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCards;
