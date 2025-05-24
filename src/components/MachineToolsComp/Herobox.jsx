
import Image from "next/image";
import HeroImage from "../../assets/distributed/hero.png";

const Herobox = () => {
  return (
    <div className="w-full h-[550px] relative flex items-center justify-center bg-white">
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold font-poppins text-white">
        Machine Tools <span className="text-red-600">Solutions</span>
        </h1>
        <div className="w-[350px] h-1 mx-auto mt-6 bg-white rounded-full"></div>
      </div>
   
  <Image
    src="/images/Industryimg/Machineimg/Rectangle 113.png"
    alt="Business technology meeting"
    className="w-[90vw] h-full shadow-md absolute" 
    width={200}
    height={200}
  />

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[80%] w-[80vw] max-w-7xl bg-white p-8 md:p-10 h-[300px] flex items-center justify-center text-center">
  <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl">
    To meet increased production demands and stay competitive, manufacturers must embrace Automation.
    Implementing automation in the machine tools sector boosts utilization and throughput while reducing cycle times and labor costs.
    Additionally, automation maintains high standards of parts quality and consistency.
  </p>
</div>

    </div>
  );
};

export default Herobox;
