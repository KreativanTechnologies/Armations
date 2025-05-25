import Image from 'next/image';
import Head from 'next/head';

const Auto = () => {
  return (
    <>
      <Head>
        <title>Automation for the Textile Industry</title>
      </Head>

      
      <div className="px-6 sm:px-6 md:px-6 lg:px-0 max-w-full">
        
        <div className="flex flex-col-reverse lg:flex-row bg-white m-0 p-0 max-w-full w-full">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 text-black py-6 md:py-10 text-justify px-0 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-red-600">Automation</span> for the Textile Industry
            </h2>
            <div className="w-44 h-1 bg-red-500 rounded-lg" />
            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
              Automation for the Textile Industry transforms manufacturing with increased efficiency and precision.
              Our cutting-edge automation solutions streamline various textile processes, from spinning and weaving
              to dyeing and finishing. <br /><br />
              By integrating advanced technologies, we help businesses achieve faster production cycles, improved
              quality, and reduced operational costs. Automated systems handle repetitive tasks with high accuracy,
              minimizing human error and ensuring consistent product quality. <br /><br />
              These systems optimize resource usage, reduce waste, and enable precise control over complex processes.
              For example, automated weaving machines and dyeing robots enhance both speed and consistency, while
              real-time monitoring systems provide valuable data for continuous improvement. <br /><br />
              Our solutions are designed to adapt to the specific needs of the textile sector, whether you are involved
              in apparel, home textiles, or industrial fabrics. We offer customized automation that integrates seamlessly
              with existing operations, providing flexibility to meet evolving demands. <br /><br />
              Embracing automation in the textile industry not only boosts production efficiency but also supports
              sustainable practices by reducing energy consumption and material waste. Experience the benefits of
              advanced automation and watch your textile operations achieve new levels of productivity, quality,
              and cost-effectiveness.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] p-0 m-0">
            <Image
              src="/images/about/Textile/Rectangle 32.png"
              alt="Business technology meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auto;
