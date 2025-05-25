import Image from "next/image"

export default function Banner({ bgImage, title }) {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgImage}
          alt="Technology background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative  flex items-center justify-center h-full w-full px-2 sm:px-4">
        <h1 className="text-white text-center text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight">
          {title}
        </h1>
      </div>
    </div>
  )
}
