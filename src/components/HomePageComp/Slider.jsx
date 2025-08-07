"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react" 

const Slider = ({ isImgSlider = false, isCardSlider = false, data }) => {
  const [current, setCurrent] = useState(1)

  // Auto-move slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev === data.length - 1 ? 0 : prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [data.length])

  const handleRightClick = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1)
  }

  const handleLeftClick = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1)
  }

  const getClass = (index) => {
    if (index === current) return "scale-100 z-10 opacity-100" 
    if (index === (current + 1) % data.length)
      return `scale-90 translate-x-[90vw] md:translate-x-[25vw] opacity-70 // Next card is slightly faded
  ${
    isCardSlider
      ? `md:translate-x-[35vw] lg:translate-x-[42vw]`
      : isImgSlider
        ? `lg:translate-x-[35vw]`
        : `lg:translate-x-[30vw]`
  } `
    if (index === (current - 1 + data.length) % data.length)
      return `scale-90 -translate-x-[90vw] md:-translate-x-[25vw] opacity-70 // Previous card is slightly faded
  ${
    isCardSlider
      ? `md:-translate-x-[35vw] lg:-translate-x-[42vw]`
      : isImgSlider
        ? `lg:-translate-x-[35vw]`
        : `lg:-translate-x-[30vw]`
  } `
    return "scale-0 opacity-0" 
  }

  const handleMouseEnter = (index) => {
    if (index === (current - 1 + data.length) % data.length) {
      handleLeftClick()
    } else if (index === (current + 1) % data.length) {
      handleRightClick()
    }
  }

  return (
    <div className="w-full h-full py-[4vw] md:py-[3vw] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <h1 className="text-center text-[5vw] md:text-2xl lg:text-3xl text-gray-800 font-bold mb-8 animate-pulse">
        Key Clients and Brands
      </h1>

      <div
        className={` ${
          isCardSlider ? `h-[100vw] md:h-[45vw] lg:h-[48vw]` : ``
        } h-[80vw] md:h-[28vw] lg:h-[32vw] w-full flex flex-col items-start justify-center py-[2vw] gap-[4vw] md:py-0 md:gap-[1vw] `}
      >
        <div className="w-full h-full px-[5vw] md:px-[10vw] relative flex justify-center items-center text-black overflow-hidden">
          {data.map((data, index) => (
            <div
              key={index}
              onClick={() => handleMouseEnter(index)}
              className={`absolute transition-all duration-500 ease-in-out transform 
                        ${getClass(index)}
                        h-[60vw] w-[85%] md:h-[18vw] md:w-[30%] lg:h-[20vw] lg:w-[32%] justify-center
                        rounded-2xl overflow-hidden bg-white shadow-2xl flex flex-col bg-opacity-100 hover:scale-110 hover:shadow-3xl hover:rotate-1 duration-700 hover:z-50 cursor-pointer
                        border border-gray-200 backdrop-blur-sm
                        ${
                          isCardSlider
                            ? `h-[95%] w-[85%] md:h-[90%] md:w-[35%] lg:h-[90%] lg:w-[42%] bg-transparent border-none shadow-none`
                            : isImgSlider
                              ? `p-0 h-[60vw] w-[85%] md:h-[18vw] md:w-[30%] lg:h-[20vw] lg:w-[32%]`
                              : `p-0 h-[60vw] w-[85%] md:h-[18vw] md:w-[30%] lg:h-[20vw] lg:w-[32%]`
                        } 
                        `}
            >
              {isCardSlider ? (
                <div className="w-full h-full p-[5vw] md:p-[2vw] lg:p-[2vw] flex flex-col gap-2">
                  {data?.href ? (
                    <Link href={data.href}>
                      <div className="h-1/2 w-full flex items-center justify-center group">
                        <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden ring-4 ring-red-500 group-hover:ring-blue-400 transition-all duration-500 group-hover:scale-110">
                          <img
                            alt={data.alt}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 bg-white p-2"
                            src={data.img_Src || "/placeholder.svg"}
                          />
                        </div>
                      </div>
                      <div className="h-1/2 w-full overflow-hidden flex flex-col items-center justify-start">
                        <p className="text-gray-700 text-[4vw] md:text-sm lg:text-base text-center font-semibold group-hover:text-red-600 transition-colors duration-300 animate-fadeInUp">
                          {data.author}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div className="h-1/2 w-full flex items-center justify-center group">
                        <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden ring-4 ring-blue-200 group-hover:ring-red-400 transition-all duration-500 group-hover:scale-110">
                          <img
                            alt={data.alt}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 bg-white p-2"
                            src={data.img_Src || "/placeholder.svg"}
                          />
                        </div>
                      </div>
                      <div className="h-1/2 w-full overflow-hidden flex flex-col items-center justify-start">
                        <p className="text-gray-700 text-[4vw] md:text-sm lg:text-base font-semibold text-center group-hover:text-red-600 transition-colors duration-300 animate-fadeInUp">
                          {data.author}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ) : isImgSlider ? (
                <div className="w-full h-full flex items-center justify-center group">
                  {data?.href ? (
                    <Link href={data?.href}>
                      <div className="w-[30vw] h-[30vw] md:w-[9vw] md:h-[9vw] lg:w-[10vw] lg:h-[10vw] rounded-full overflow-hidden ring-4 ring-red-200 group-hover:ring-red-400 transition-all duration-500 group-hover:scale-110">
                        <img
                          alt={data.alt}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 bg-white p-2"
                          src={data.img_Src || "/placeholder.svg"}
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="w-[30vw] h-[30vw] md:w-[9vw] md:h-[9vw] lg:w-[10vw] lg:h-[10vw] rounded-full overflow-hidden ring-4 ring-blue-200 group-hover:ring-red-400 transition-all duration-500 group-hover:scale-110 bg-white">
                      <img
                        alt={data.alt}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 p-2"
                        src={data.img_Src || "/placeholder.svg"}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full flex flex-col group">
                  {/* Image Section - Top Half */}
                  <div className="h-1/2 w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
                    {data?.href ? (
                      <Link href={data.href}>
                        <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-red-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl bg-white">
                          <img
                            alt={data.alt || "Card image"}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 group-hover:contrast-110 p-2"
                            src={data.img_Src || "/placeholder.svg?height=100&width=200&query=card%20image"}
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-red-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl bg-white">
                        <img
                          alt={data.alt || "Card image"}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110 group-hover:contrast-110 p-2"
                          src={data.img_Src || "/placeholder.svg?height=100&width=200&query=card%20image"}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Title Section - Bottom Half */}
                  <div className="h-1/2 w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-t from-gray-50 to-white relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {data?.href ? (
                      <Link href={data.href}>
                        <p className="text-gray-800 text-[4vw] md:text-sm lg:text-base font-bold text-center px-4 py-2 rounded-lg group-hover:text-blue-600 transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-md transform group-hover:scale-105 relative z-10">
                          <span className="inline-block group-hover:animate-bounce">{data.author}</span>
                        </p>
                      </Link>
                    ) : (
                      <p className="text-gray-800 text-[4vw] md:text-sm lg:text-base font-bold text-center px-4 py-2 rounded-lg group-hover:text-blue-600 transition-all duration-300 group-hover:bg-white/50 group-hover:shadow-md transform group-hover:scale-105 relative z-10">
                        <span className="inline-block group-hover:animate-bounce">{data.author}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="w-full flex justify-center">
          <div className="flex gap-[5vw] md:gap-[1.5vw]">
            <button
              onClick={handleLeftClick}
              className="p-2 w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[3vw] lg:h-[3vw] bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full flex justify-center items-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white hover:rotate-[-5deg]"
            >
              <ChevronLeft className="text-[4vw] md:text-[2vw] drop-shadow-sm" />
            </button>
            <button
              onClick={handleRightClick}
              className="p-2 w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[3vw] lg:h-[3vw] bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-full flex justify-center items-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-white hover:rotate-[5deg]"
            >
              <ChevronRight className="text-[4vw] md:text-[2vw] drop-shadow-sm" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Slider