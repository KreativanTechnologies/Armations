import Image from "next/image"

export default function Banner({bgImage, title}) {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
        
          src={bgImage}
          alt="Technology background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl">
          {title}
          
        </h1>
      </div>
    </div>
  )
}

