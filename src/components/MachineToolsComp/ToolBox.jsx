

import Image from 'next/image';
import Head from 'next/head';

const ToolBox = () => {
  return (
    <>
      <Head>
        <title>Automation for the Packaging indusrty</title>
      </Head>

      
      <div className="px-6 sm:px-6 md:px-6 lg:px-0 max-w-full">
        
        <div className="flex flex-col-reverse lg:flex-row bg-white m-0 p-0 max-w-full w-full">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 text-black py-6 md:py-10 text-justify px-0 lg:px-6">
            
            
            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
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

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] p-0 m-0">
            <Image
              src="/images/Industryimg/Machineimg/Rectangle 32.png"
              alt="Business technology meeting"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolBox;

