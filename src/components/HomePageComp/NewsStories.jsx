"use client";
import { useState } from "react";
const newsData = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg?t=st=1742373082~exp=1742376682~hmac=75de66fc4c67f9e0e365c029530f7ccd0d3a59bb52440b9fbad6ea6dfd82c083&w=1060",
    date: "March 1, 2025",
    title: "Web Solution Release",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/odenwald-germany-is-pure-nature_181624-32381.jpg?t=st=1742373007~exp=1742376607~hmac=7124aa71d173501f1e37f9646a4a44e8cc96a2b5cd9fa126db3752150a58a41a&w=1380",
    date: "March 1, 2025",
    title: "Web Solution Release",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/park-grass_1127-2287.jpg?t=st=1742373109~exp=1742376709~hmac=63ae2d51230c4e7b6f41d756c3bb4e871a99344ca46482252474010169567cd7&w=996",
    date: "March 1, 2025",
    title: "Web Solution Release",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-762.jpg?t=st=1742373129~exp=1742376729~hmac=cf959e41c7a0505e22d25955ec99a9fea79570f4d7542b240c3a90aa2491a4f4&w=1380",
    date: "March 2, 2025",
    title: "New Tech Launch",
    description: "The latest tech innovation is here. Discover what’s new!",
  },
  {
    id: 5,
    image: "https://img.freepik.com/free-photo/summer-green-water-sunlight-spring-beauty_1417-1246.jpg?t=st=1742373145~exp=1742376745~hmac=6d2174515e9b4b707356f8f194541242fb87ae8fba57093252835a6d712952f1&w=1380",
    date: "March 3, 2025",
    title: "AI Breakthrough",
    description: "Artificial Intelligence is evolving faster than ever before.",
  },
];

const NewsStories = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="h-full w-full bg-zinc-200 text-black py-[4vw] px-[7vw] flex flex-col gap-[2vw]">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className=" text-xl md:text-4xl font-bold">Latest News and Stories</h1>
        <hr className="h-1 bg-orange-600 w-[20%] md:w-[8%] border-none rounded-4xl" />
      </div>

      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(showAll ? newsData : newsData.slice(0, 3)).map((news) => (
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
                <h3 className="font-semibold text-lg mt-2">
                  {news.description}
                </h3>
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

export default NewsStories;
