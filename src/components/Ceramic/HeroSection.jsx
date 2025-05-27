import Image from "next/image";
import HeroImage from "../../assets/distributed/hero.png";

const HeroSection = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start bg-white pb-1">
     
      {/* Background image with centered heading and light overlay */}
      <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
        {/* Image */}
        <Image
          src="/images/Industryimg/Machineimg/Rectangle 113.png"
          alt="Business technology meeting"
          className="w-full h-full object-cover absolute top-0 left-0 z-0 rounded-lg"
          width={2000}
          height={550}
        />

        {/* Black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

        {/* Heading centered in the image */}
        <div className="z-20 text-center px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white">
    Ceramics Industry <span className="text-red-600">Solutions</span>
  </h1>
  <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-1 mx-auto mt-4 md:mt-6 bg-white rounded-full"></div>
</div>
      </div>

      {/* Paragraph Box */}
      <div className="relative z-20 -mt-30 w-[75vw] max-w-7xl bg-white p-8 md:p-10 text-center ">
  <p className="text-gray-700 text-base md:text-base leading-relaxed max-w-3xl mx-auto">
   India’s Ceramic Industry drives modern manufacturing by offering a diverse range of products that blend functionality with aesthetics. This sector includes the production of ceramic materials such as tiles, sanitaryware, tableware, and advanced ceramics used in high-tech applications.
Firstly find Top Ceramic Industry in India – Aarmation Electric, ceramic tiles serve as a staple in both residential and commercial spaces, delivering durability and style. They offer options ranging from sleek, contemporary designs to traditional patterns. Similarly, sanitaryware, which encompasses sinks, toilets, and bathtubs, benefits from ceramics’ inherent resistance to moisture and ease of cleaning. Furthermore, ceramic tableware combines elegance with practicality, enhancing dining experiences through its variety of designs and finishes.
Additionally, advanced ceramics, a rapidly growing sector, find applications in electronics, aerospace, and medical devices. These materials are highly valued for their exceptional properties, such as high thermal stability, electrical insulation, and resistance to wear and corrosion.
Moreover, India’s Ceramic Industry is defined by its commitment to innovation and sustainability. Manufacturers constantly develop new techniques and materials to address evolving consumer demands and environmental regulations. Techniques such as digital printing and sustainable manufacturing practices are increasingly prevalent, thereby reducing waste and improving energy efficiency with Top Ceramic Industry in Chandigarh- Aarmation Electric.
For businesses and homeowners alike, recognizing the benefits of ceramics is crucial. Whether you are considering ceramic tiles for renovation, investing in durable sanitaryware, or exploring advanced ceramics for cutting-edge technology, the ceramic industry offers versatile solutions that seamlessly combine durability, aesthetic appeal, and functionality.
India’s Ceramic Industry stands out as a dynamic sector with a broad array of products and applications. By embracing advanced technologies and sustainable practices, it effectively meets modern consumers’ diverse needs while contributing to environmental conservation. Explore the ceramic industry to discover the ideal solution for your specific requirements.
  </p>
</div>
    </div>
  );
};

export default HeroSection;
