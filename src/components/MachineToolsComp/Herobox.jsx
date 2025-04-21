
import Image from "next/image";
import HeroImage from "../../assets/distributed/hero.png";

const Herobox = () => {
  return (
    <div className="w-full h-[550px] relative flex items-center justify-center bg-black/60">
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold font-poppins text-white">
        Machine Tools <span className="text-red-600">Solutions</span>
        </h1>
        <div className="w-[250px] h-1 mx-auto mt-2 bg-white rounded-full"></div>
      </div>
      <Image
      src="/images/Industryimg/Rectangle 113.png"
      alt="Business technology meeting"
      className="absolute w-full h-full  shadow-md inset-0"
      width={400}
      height={300}
      />
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
  );
};

export default Herobox;
