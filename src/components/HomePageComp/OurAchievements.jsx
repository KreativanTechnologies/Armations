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
    // <>
   
    //  <section className="relative w-full py-16 md:py-24 overflow-hidden">
    //   {/* Background Image */}
    //   <div className="absolute inset-0 w-full h-full ">
      
    //     <img src="/images/ourAchiv/achiv.png" alt="our achivements" className="object-cover brightness-50 h-full" />
    //   </div>

    //   {/* Content */}
    //   <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Heading */}
    //       <div className="text-center ">
    //       <h2 className="text-3xl md:text-4xl font-bold text-white  ">Our Achievements</h2>
    //       <div className="w-24 h-1 bg-white mx-auto"></div>
    //     </div>

    //     {/* Stats Grid */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0   mt-2 ">
    //       {achievements.map((item, index) => (
    //         <div key={index} className="flex flex-col items-center gap-2  justify-center mt-8">
    //           <div className="flex flex-col items-center">
    //             <span className="text-5xl md:text-6xl font-bold text-red-600 ">{item.number}</span>
    //             <span className="text-lg md:text-xl text-white">{item.text}</span>
    //           </div>

    //           {/* Divider line (except for the last item) */}
    //           {index < achievements.length - 1 && (
    //             <div
    //               className="hidden  lg:block absolute h-32 w-px bg-white"
    //               style={{ right: `${(100 / achievements.length) * (index + 1)}%` }}
    //             ></div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    
    // </>

    <section 
    className="w-full relative py-20 px-4 border-2"
    style={{
      backgroundImage: "url('/images/ourAchiv/achiv.png')",
     
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Our Achievements</h2>
        <div className="w-16 h-1 bg-white mx-auto" />
      </div>

      {/* Stats Grid */}
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0   mt-2 ">
          {achievements.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2  justify-center mt-8">
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-bold text-red-600 ">{item.number}</span>
                <span className="text-lg md:text-xl text-white">{item.text}</span>
              </div>

              {/* Divider line (except for the last item) */}
              {index < achievements.length - 1 && (
                <div
                  className="hidden  lg:block absolute h-32 w-px bg-white"
                  style={{ right: `${(100 / achievements.length) * (index + 1)}%` }}
                ></div>
              )}
            </div>
          ))}
        </div>
    </div>
  </section>
   
  )
}

export default OurAchievements