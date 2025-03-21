import Image from "next/image"

const AboutHero = () => {
  return (
    <div className="relative bg-gray-50 py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full bg-[linear-gradient(135deg,#f5f5f5_25%,#eeeeee_25%,#eeeeee_50%,#f5f5f5_50%,#f5f5f5_75%,#eeeeee_75%)]"
          style={{ backgroundSize: "100px 100px" }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-6">
            About <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            Our end to end smart solutions empower smart industries, smart living and smart enterprises and deliver
            connecting experiences by connecting assets, operation/logistics and services
          </p>
        </div>

        <div className="relative mt-8">
          <div className="w-full relative">
            <Image
              src="/images/about/about.png"
              alt="Team members working with technical equipment"
              width={1000}
              height={500}
              className="w-full h-[70vw] md:h-auto object-cover rounded-lg"
              priority
            />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-[70%] w-[80vw] max-w-6xl bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl text-black font-bold mb-4">
              Our Story
              <div className="h-1 w-16 bg-red-500 mt-2"></div>
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem ipsum. Lorem ipsum is simply dummy text of the printing
              and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutHero


