import React from 'react'
import Image from "next/image"
import Link from "next/link"

const OurMission = () => {
  return (
    <>
    <div>Our Mission</div>
    <section className="relative w-full">
      {/* Background Image */}
      {/* <div className="absolute inset-0 w-full h-full">
        <Image
          // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Pd7HzQRz89UJwQ7yTiVVhvTRwPrM1.png"
          alt="Business meeting background"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div> */}

      {/* Content Overlay - positioned on the right side on desktop, centered on mobile */}
      <div className="relative min-h-[600px] flex items-center justify-end px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-[500px] my-12 md:mr-12 lg:mr-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-red-500 mb-6"></div>

          <p className="text-gray-700 mb-8">
            Our end to end smart solutions empower smart industries, smart living and smart enterprises and deliver
            connecting experiences by connecting assets, operation/ logistics and services
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Energy Saving Solution</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Distributed Control System</span>
            </div>
          </div>

          <Link
            href="#"
            className="inline-block px-8 py-3 border-2 border-red-500 text-black font-medium rounded-full hover:bg-red-50 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
    </>
    
    
  )
}

export default OurMission