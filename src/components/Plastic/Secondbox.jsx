import Image from 'next/image';
import Head from 'next/head';

const Secondbox = () => {
  return (
    <>
      <Head>
        <title>Automation for the Plastic Industry</title>
      </Head>

      
      <div className="px-6 sm:px-6 md:px-6 lg:px-0 max-w-full">
       
        <div className="flex flex-col-reverse lg:flex-row bg-white m-0 p-0 max-w-full w-full">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 text-black py-6 md:py-10 text-justify px-0 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-red-600">Automation</span> for the Plastic Industry
            </h2>
            <div className="w-44 h-1 bg-red-500 rounded-lg" />
            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
               Automation for the Plastic Industry transforms production processes with precision and efficiency. Our advanced automation solutions are designed to enhance every stage of plastic manufacturing. By implementing cutting-edge technology, we streamline operations and increase speed while maintaining high accuracy. Automated systems handle repetitive tasks such as molding, trimming, and assembly with consistency, reducing the need for manual intervention and minimizing errors. This results in faster production cycles and improved product quality. Our solutions are tailored to meet the specific needs of the plastic sector, whether for packaging, automotive parts, or consumer goods. We offer customized systems that integrate seamlessly with your existing processes, providing flexibility and scalability to adapt to market changes and production demands. In addition to improving efficiency, our automation systems help reduce waste and optimize resource usage. Real-time monitoring and data analytics offer valuable insights into your production, enabling proactive management and continuous improvements. Adopt Aarmation Electric innovative automation solutions and experience a new level of productivity and precision. Watch your plastic manufacturing operations thrive with reduced costs, enhanced quality, and streamlined processes.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] p-0 m-0">
            <Image
              src="/images/Industryimg/Plasticimg/Rectangle 32.png"
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

export default Secondbox;
