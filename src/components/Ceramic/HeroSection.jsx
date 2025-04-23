
import Image from "next/image";
import HeroImage from "../../assets/distributed/hero.png";

const HeroSection = () => {
  return (
    <div className="w-full h-[550px] relative flex items-center justify-center bg-white">
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold font-poppins text-white">
        Ceramics Industry <span className="text-red-600">Solutions</span>
        </h1>
        <div className="w-[350px] h-1 mx-auto mt-6 bg-white rounded-full"></div>
      </div>
   
  <Image
    src="/images/Industryimg/Machineimg/Rectangle 113.png"
    alt="Business technology meeting"
    className="w-[90vw] h-full shadow-md  absolute" 
    width={200}
    height={200}
  />

<div className="absolute left-1/2 transform -translate-x-1/2 top-[80%] w-[80vw] max-w-7xl bg-white p-8 md:p-10 shadow-lg flex items-center justify-center text-center">
  <p className="text-gray-700 text-base md:text-base leading-relaxed max-w-4xl">
    India’s Ceramic Industry drives modern manufacturing by offering a diverse range of products that blend functionality with aesthetics. This sector includes the production of ceramic materials such as tiles, sanitaryware, tableware, and advanced ceramics used in high-tech applications.
    Firstly find Top Ceramic Industry in India – Aarmation Electric, ceramic tiles serve as a staple in both residential and commercial spaces, delivering durability and style. They offer options ranging from sleek, contemporary designs to traditional patterns. Similarly, sanitaryware, which encompasses sinks, toilets, and bathtubs, benefits from ceramics’ inherent resistance to moisture and ease of cleaning. Furthermore, ceramic tableware combines elegance with practicality, enhancing dining experiences through its variety of designs and finishes.
    Additionally, advanced ceramics, a rapidly growing sector, find applications in electronics, aerospace, and medical devices. These materials are highly valued for their exceptional properties, such as high thermal stability, electrical insulation, and resistance to wear and corrosion.
    Moreover, India’s Ceramic Industry is defined by its commitment to innovation and sustainability. Manufacturers constantly develop new techniques and materials to address evolving consumer demands and environmental regulations. Techniques such as digital printing and sustainable manufacturing practices are increasingly prevalent, thereby reducing waste and improving energy efficiency with Top Ceramic Industry in Chandigarh- Aarmation Electric.
    For businesses and homeowners alike, recognizing the benefits of ceramics is crucial. Whether you are considering ceramic tiles for renovation, investing in durable sanitaryware, or exploring advanced ceramics for cutting-edge technology, the ceramic industry offers versatile solutions that seamlessly combine durability, aesthetic appeal, and functionality.
    India’s Ceramic Industry stands out as a dynamic sector with a broad array of products and applications. By embracing advanced technologies and sustainable practices, it effectively meets modern consumers’ diverse needs while contributing to environmental conservation. Explore the ceramic industry to discover the ideal solution for your specific requirements.
  </p>
</div>


    </div>
  );
};

export default HeroSection;
