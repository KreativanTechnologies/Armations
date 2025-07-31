
import Image from "next/image";
import DCSLayoutImage from "../../assets/distributed/2.webp"; // renamed image import

const DCSLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00a651] font-poppins mb-6">
        Basic Layout of DCS Connected with Industrial Sensor & Equipment
      </h2>
      <div className="w-full max-w-5xl  rounded-xl overflow-hidden shadow-lg">
        <Image
          src={DCSLayoutImage}
          alt="Basic Layout of DCS"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default DCSLayout;
