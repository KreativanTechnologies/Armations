'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

export default function GridGallery({data}) {
  const [visibleIndexes, setVisibleIndexes] = useState({});
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const toggleOverlay = (index) => {
    setVisibleIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative">
      {/* Custom Cursor */}
      {showCursor && (
        <div
          className="fixed z-50 pointer-events-none text-white bg-black p-2 text-xs rounded-full hidden md:flex"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transition: "transform 0.05s ease",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
          }}
        >
          click
        </div>
      )}

      {/* Grid */}
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[3vw]">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-2xl drop-shadow-lg rounded-[2vw] overflow-hidden cursor-pointer md:h-[70vh] flex items-center justify-center"
              onClick={() => toggleOverlay(index)}
              onMouseEnter={() => setShowCursor(true)}
              onMouseLeave={() => setShowCursor(false)}
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
                <div className="w-full h-full bg-red-500 flex flex-col justify-center items-center text-white text-center p-4 md:p-[2vw]">
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
