import HeroImage from "../../assets/distributed/hero.png";
import I1 from "../../assets/distributed/1.png";
import Image from "next/image";
const DistributedControlSystems = () => {
  return (
    <div className='min-h-screen relative bg-white flex flex-col items-center'>
      {/* Image Section */}
      <div className='w-full relative h-[550px] flex bg-black/60 items-center justify-center'>
        <div className='z-10'>
          {/* Title */}
          <h1 className='text-4xl justify-start font-poppins z-10 font-bold text-center text-white '>
            Distributed Control Systems
          </h1>
          <div className='w-[250px] h-1 rounded-full mx-auto mt-2 mix-blend-normal bg-[#ff0004]'></div>
        </div>{" "}
        <Image
          src={HeroImage} // Update the path if necessary
          alt='Distributed Control Systems Diagram'
          className='w-full h-full object-cover absolute mix-blend-multiply inset-0 rounded-lg shadow-md'
        />
      </div>

      {/* Content Section */}
      <div className='bg-transparent text-center justify-center max-w-[80%] py-7 text-[#606062] text-xl font-medium font-poppins -mt-[70px] min-[400px]:-mt-[100px] min-[550px]:-mt-[150px] sm:-mt-[200px] z-10  w-full p-6 rounded-lg'>
        <Image
          src={I1}
          className=' max-w-4xl mx-auto w-full h-full object-cover'
          alt=""
        />
        <p className='my-4  '>
          The DCS employs multiple autonomous controllers, each housing its own
          processor, which distribute across the system to automate processes
          effectively. If a processor fails, it impacts only one section of the
          plant process, unlike a central computer failure that could disrupt
          the entire process.
        </p>
        <p className='mb-4'>
          As the 'central brain' of the plant, the DCS makes automated decisions
          based on real-time production trends observed throughout the plant. In
          contrast to a PLC, which adjusts a single unit operation, the DCS can
          fine-tune each of a plant’s many interacting unit operations.
        </p>
        <p className='mb-4'>
          With a centralized network of computers, the DCS coordinates
          adjustments across the plant, feeding instructions to individual
          controllers. This advanced system reduces downtime, enhances
          production efficiency, and maintains compliance with safety standards.
        </p>
        <p>
          Optimize your industrial operations with a Distributed Control System
          (DCS). Leverage its advanced technology to boost production, maintain
          compliance, and streamline your processes effortlessly.
        </p>
      </div>
    </div>
  );
};

export default DistributedControlSystems;
