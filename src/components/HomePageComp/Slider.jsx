"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react" 

const Slider = ({ isImgSlider = false, isCardSlider = false, data }) => {
  const [current, setCurrent] = useState(1)

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
    <div className="w-full h-full py-[4vw] md:py-[3vw] bg-gray-200">
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
              className={`absolute transition-transform  duration-300 transform 
                        ${getClass(index)}
                        h-[60vw] w-[85%] md:h-[18vw] md:w-[30%] lg:h-[20vw] lg:w-[32%] justify-center
                        rounded-lg overflow-hidden bg-[#D9D9D9] shadow-lg flex flex-col bg-opacity-100 hover:scale-105 duration-500 hover:z-50 
                        ${
                          isCardSlider
                            ? `h-[95%] w-[85%] md:h-[90%] md:w-[35%] lg:h-[90%] lg:w-[42%] bg-transparent border-none shadow-none`
                            : isImgSlider
                              ? `p-0 h-[60vw] w-[85%] md:h-[18vw] md:w-[30%] lg:h-[20vw] lg:w-[32%]`
                              : `p-[4vw] md:p-[1.6vw] h-[60vw] w-[85%] md:h-[18vw] md:w-[30%] lg:h-[20vw] lg:w-[32%]`
                        } 
                        `}
            >
              {isCardSlider ? (
                <div className="w-full h-full p-[5vw] md:p-[2vw] lg:p-[2vw] flex flex-col gap-2">
                  {data?.href ? (
                    <Link href={data.href}>
                      <div className="h-1/2 w-full flex items-center justify-center">
                        <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden">
                          <img
                            alt={data.alt}
                            className="w-full h-full object-cover"
                            src={data.img_Src || "/placeholder.svg"}
                          />
                        </div>
                      </div>
                      <div className="h-1/2 w-full overflow-hidden flex flex-col items-center justify-start">
                        <p className="text-black text-[5.5vw] md:text-[2vw] lg:text-[2.2vw] font-medium text-center">
                          {data.author}
                        </p>
                        <p className="text-[3.2vw] text-center md:text-[1vw] lg:text-[1.2vw] ">
                          {data.desc}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div className="h-1/2 w-full flex items-center justify-center">
                        <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden">
                          <img
                            alt={data.alt}
                            className="w-full h-full object-cover"
                            src={data.img_Src || "/placeholder.svg"}
                          />
                        </div>
                      </div>
                      <div className="h-1/2 w-full overflow-hidden flex flex-col items-center justify-start">
                        <p className="text-black text-[4vw] md:text-[2vw] lg:text-[2vw] font-medium text-center">
                          {data.author}
                        </p>
                        <p className="text-[3.2vw] text-center md:text-[1vw] lg:text-[1.2vw] ">
                          {data.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              ) : isImgSlider ? (
                <div className="w-full h-full flex items-center justify-center">
                  {data?.href ? (
                    <Link href={data?.href}>
                      <div className="w-[30vw] h-[30vw] md:w-[9vw] md:h-[9vw] lg:w-[10vw] lg:h-[10vw] rounded-full overflow-hidden">
                        <img
                          alt={data.alt}
                          className="w-full h-full object-cover"
                          src={data.img_Src || "/placeholder.svg"}
                        />
                      </div>
                    </Link>
                  ) : (
                    <div className="w-[30vw] h-[30vw] md:w-[9vw] md:h-[9vw] lg:w-[10vw] lg:h-[10vw] rounded-full overflow-hidden">
                      <img
                        alt={data.alt}
                        className="w-full h-full object-cover"
                        src={data.img_Src || "/placeholder.svg"}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full p-[5vw] md:p-[2vw] lg:p-[2vw] flex flex-col gap-2">
                  <div className="h-1/2 w-full flex items-center justify-center">
                    {data?.href ? (
                      <Link href={data.href}>
                        <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden">
                          <img
                            alt={data.alt || "Card image"}
                            className="w-full h-full object-cover"
                            src={data.img_Src || "/placeholder.svg?height=100&width=200&query=card%20image"}
                          />
                        </div>
                      </Link>
                    ) : (
                      <div className="w-[25vw] h-[25vw] md:w-[7vw] md:h-[7vw] lg:w-[8vw] lg:h-[8vw] rounded-full overflow-hidden">
                        <img
                          alt={data.alt || "Card image"}
                          className="w-full h-full object-cover"
                          src={data.img_Src || "/placeholder.svg?height=100&width=200&query=card%20image"}
                        />
                      </div>
                    )}
                  </div>
                  <div className="h-1/2 w-full overflow-hidden flex flex-col items-center justify-start">
                    {data?.href ? (
                      <Link href={data.href}>
                        <p className="text-gray-900 text-[5.5vw] md:text-[2.1vw] lg:text-[2.5vw] font-medium text-center">
                          {data.author}
                        </p>
                        <p className="text-[3.2vw] md:text-[1vw] lg:text-[1.2vw] text-center">{data.desc}</p>
                      </Link>
                    ) : (
                      <>
                        <p className="text-gray-900 text-[5.5vw] md:text-[2.1vw] lg:text-[2.5vw] font-medium text-center">
                          {data.author}
                        </p>
                        <p className="text-[3.2vw] md:text-[1vw] lg:text-[1.2vw] text-center">{data.desc}</p>
                      </>
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
              className="p-2 w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[3vw] lg:h-[3vw] bg-blue-400 hover:bg-blue-600 rounded-full flex justify-center items-center"
            >
              <ChevronLeft className="text-[4vw] md:text-[2vw]" />
            </button>
            <button
              onClick={handleRightClick}
              className="p-2 w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[3vw] lg:h-[3vw] bg-blue-400 hover:bg-blue-600 rounded-full flex justify-center items-center"
            >
              <ChevronRight className="text-[4vw] md:text-[2vw]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
