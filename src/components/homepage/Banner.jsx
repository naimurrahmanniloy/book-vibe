import React from "react";
import bookImg from "../../assets/ban.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto my-8">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-7xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button className="btn btn-success text-white mt-12">
              View the list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
