import React from 'react'
import Image from "next/image"

const OurAchievements = () => {
  const achievements = [
    { number: "100", text: "Happy Customers" },
    { number: "2000", text: "Projects Done" },
    { number: "100", text: "Award Win" },
    { number: "1000", text: "Clients Work" },
  ]
  
  return (
    <>
     <div>Our Achievements</div>
     <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KHc5y7Zo0sIFifQ6F2eJezDVd7QIJ2.png"
          alt="Technology background"
          fill
          className="object-cover brightness-50"
          sizes="100vw"
          priority
        /> */}
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KHc5y7Zo0sIFifQ6F2eJezDVd7QIJ2.png" alt="our achivements" className="object-cover brightness-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-red-600 mb-2">{item.number}</span>
                <span className="text-lg md:text-xl text-white">{item.text}</span>
              </div>

              {/* Divider line (except for the last item) */}
              {index < achievements.length - 1 && (
                <div
                  className="hidden lg:block absolute h-16 w-px bg-white"
                  style={{ right: `${(100 / achievements.length) * (index + 1)}%` }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
   
  )
}

export default OurAchievements