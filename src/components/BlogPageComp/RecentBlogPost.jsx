"use client";
import { useState } from "react";

const BlogPost = ({ newsData = [] }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      className="
        h-full w-full bg-white text-black
        pt-2 md:pt-12 lg:pt-16
        px-6 pb-16 md:px-14 md:pb-20
        flex flex-col gap-8
      "
    >
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-4xl font-bold">Recent <span className="text-red-500">Blog</span> Post</h1>
        <hr className="h-1 bg-orange-600 w-1/5 md:w-1/12 border-none rounded-4xl" />
      </div>

      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? newsData : newsData.slice(0, 6)).map((news) => (
            <div
              key={news.id}
              className="bg-transparent overflow-hidden hover:border-b-3 border-b-amber-600 hover:scale-110 duration-2000 hover:z-10"
            >
              <div className="relative w-full h-60">
                <img
                  src={news.image}
                  alt={news.title}
                  layout="fill"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">
                  {news.title} {news.date}
                </p>
                <h3 className="font-semibold text-lg mt-2">{news.description}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border-2 text-md md:text-xl font-normal border-red-500 text-black px-6 py-2 md:px-8 md:py-4 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            {showAll ? "Show Less" : "See All Stories"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
