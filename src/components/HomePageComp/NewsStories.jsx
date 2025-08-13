"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const NewsStories = ({ newsData = [], defaultRows = 1 }) => {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 640)
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const itemsToShow = showAll ? newsData.length : isMobile ? 3 : defaultRows * 3

  const handleCardClick = (newsId) => {
    router.push("/blog")
  }

  return (
    <div className="h-full w-full bg-white text-black px-6 md:px-[5vw] py-8 md:py-[3vw] flex flex-col gap-8">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-4xl font-bold">Latest News And Stories</h1>
        <hr className="h-1 bg-orange-600 w-1/5 md:w-1/12 border-none rounded-4xl" />
      </div>

      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.slice(0, itemsToShow).map((news) => (
            <div
              key={news.id}
              onClick={() => handleCardClick(news.id)}
              className="bg-transparent overflow-hidden hover:border-b-4 border-b-red-600 hover:scale-110 duration-2000 hover:z-10 rounded-2xl cursor-pointer"
            >
              <div className="relative w-full h-60 rounded-2xl overflow-hidden">
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  layout="fill"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-800 text-md">
                  {news.title} {news.date}
                </p>
                <h3 className="font-semibold text-lg mt-2">{news.description}</h3>
              </div>
            </div>
          ))}
        </div>

        {newsData.length > (isMobile ? 3 : defaultRows * 3) && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border-2 text-md md:text-xl font-normal border-red-500 text-black px-6 py-2 md:px-8 md:py-4 rounded-full hover:bg-red-500 hover:text-white transition cursor-pointer"
            >
              {showAll ? "Show Less" : "See All Stories"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewsStories
