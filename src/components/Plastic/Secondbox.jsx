import Image from 'next/image';
import Head from 'next/head';

const Secondbox = () => {
  return (
    <>
      <Head>
        <title>Automation for the Plastic Industry</title>
      </Head>

      <div className="flex flex-col md:flex-row md:items-center bg-white m-0 p-0">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-black p-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-red-600">Automation</span> for the Plastic Industry
          </h2>
          <div className="w-44 h-1 bg-red-500 rounded-lg"></div>
          <p>
            Automation for the Plastic Industry transforms production processes with precision and efficiency. Our advanced automation solutions are designed to enhance every stage of plastic manufacturing. By implementing cutting-edge technology, we streamline operations and increase speed while maintaining high accuracy. Automated systems handle repetitive tasks such as molding, trimming, and assembly with consistency, reducing the need for manual intervention and minimizing errors. This results in faster production cycles and improved product quality. Our solutions are tailored to meet the specific needs of the plastic sector, whether for packaging, automotive parts, or consumer goods. We offer customized systems that integrate seamlessly with your existing processes, providing flexibility and scalability to adapt to market changes and production demands. In addition to improving efficiency, our automation systems help reduce waste and optimize resource usage. Real-time monitoring and data analytics offer valuable insights into your production, enabling proactive management and continuous improvements. Adopt Aarmation Electric innovative automation solutions and experience a new level of productivity and precision. Watch your plastic manufacturing operations thrive with reduced costs, enhanced quality, and streamlined processes.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 h-[600px] relative p-0 m-0">
          <Image
            src="/images/Industryimg/Plasticimg/Rectangle 32.png"
            alt="Business technology meeting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Secondbox;
