"use client";
import React from "react";
import Link from "next/link";
const OurMission = ({ data }) => {
  return (
    <div className="h-full flex md:pl-20 flex-col-reverse md:flex-row items-center justify-between w-full overflow-hidden px-6 md:px-0 gap-4 md:gap-0">
      {/* left side */}
      <div className="w-full h-[45%] md:h-full md:w-1/2  flex flex-col gap-4  ">
        <h1 className="text-3xl text-black md:text-4xl font-bold">
          {data.title}
          <div className="w-28 h-1 bg-red-500"></div>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">{data.desc}</p>
        <div className="w-full text-black md:w-1/2">
          {data.btn_Text && (
            <Link href="/contactUs">
              <button className="rounded-full px-10 py-3 text-base border cursor-pointer border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors">
                {data.btn_Text}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* right side  */}
      <div className="w-full h-[55%] relative md:w-1/2 md:h-full flex justify-center items-center overflow-hidden rounded-2xl md:rounded-none md:rounded-bl-[2vw]">
        <img
          src={data.img_Src}
          alt={data.title}
          layout="fill"
          className=" object-cover"
        />
        <div className="absolute inset-0 bg-red-600 opacity-25 rounded-lg"></div>
      </div>
    </div>
  );
};
export default OurMission;
