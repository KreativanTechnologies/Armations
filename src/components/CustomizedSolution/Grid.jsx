'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function GridGallery({ data }) {
  const [visibleIndexes, setVisibleIndexes] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const toggleOverlay = (index) => {
    if (isMobile) {
      setVisibleIndexes((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setVisibleIndexes((prev) => ({
        ...prev,
        [index]: true,
      }));
    }
  };

  const handleMouseLeave = (index) => {
    if (!isMobile) {
      setVisibleIndexes((prev) => ({
        ...prev,
        [index]: false,
      }));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Grid */}
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[3vw]">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-2xl drop-shadow-lg rounded-[2vw] overflow-hidden cursor-pointer md:h-[70vh] flex items-center justify-center"
              onClick={() => toggleOverlay(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {!visibleIndexes[index] ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="object-center object-contain"
                />
              ) : (
                <div className="w-full h-full bg-[#232323] flex flex-col justify-center items-center text-white text-center p-4 md:p-[2vw]">
                  <h3 className="text-lg md:text-[2vw] font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-md md:text-[1.2vw]">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
