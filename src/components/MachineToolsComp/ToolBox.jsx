import Image from 'next/image';
import Head from 'next/head';

const ToolBox = () => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start px-4 sm:px-6 lg:px-12 py-8 bg-white gap-8">
       
        <div className="w-full md:w-1/2 text-black space-y-4">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Key trends are shaping the Machine Tools Industry, with automation and smart technology at the forefront.
            For instance, advanced machine tools now come equipped with sophisticated sensors and control systems.
            These innovations not only enhance precision but also reduce downtime and facilitate real-time monitoring.
            Consequently, this automation trend improves efficiency, ensures consistent product quality, and lowers labor costs.
            Regarding market dynamics, the global machine tools market is growing robustly. Rising demand in emerging economies, coupled with technological advancements, drives this growth.
            The industry is also seeing increased investments in research and development, which aim to enhance machine capabilities and expand applications across diverse sectors such as automotive, aerospace, and electronics.
            Moreover, sustainability is becoming a central focus.
            Modern machine tools are designed to be more energy-efficient and environmentally friendly.
            This shift aligns with global efforts to reduce carbon footprints and promote sustainable practices.
            The Machine Tools Industry plays a pivotal role in advancing manufacturing technologies.
            By adopting automation and embracing sustainability, this sector continues to drive innovation and efficiency, meeting the evolving demands of a dynamic global market.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative">
          <Image
            src="/images/Industryimg/Machineimg/Rectangle 32.png"
            alt="Business technology meeting"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ToolBox;
