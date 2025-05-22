import Image from 'next/image';
import Head from 'next/head';

const Automation = () => {
  return (
    <>
      <Head>
        <title>Automation for the Packaging indusrty</title>
      </Head>

      
      <div className="px-6 sm:px-6 md:px-6 lg:px-0 max-w-full">
        
        <div className="flex flex-col-reverse lg:flex-row bg-white m-0 p-0 max-w-full w-full">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-4 text-black py-6 md:py-10 text-justify px-0 lg:px-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="text-red-600">Automation</span> for the Packaging indusrty
            </h2>
            <div className="w-44 h-1 bg-red-500 rounded-lg" />
            <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-700">
              In the fast-paced packaging world, efficiency and precision are crucial. Automation for the Packaging Industry offers transformative solutions. Our systems streamline operations, cut costs, and boost productivity.
Advanced automation technologies improve speed and accuracy significantly. Automated systems perform repetitive tasks like sorting, filling, sealing, and labeling with high precision. These systems minimize human error and reduce manual labor needs. They speed up production and ensure consistent quality. This consistency is vital for maintaining brand reputation and meeting regulations.
We tailor our automation solutions to fit the packaging sector’s needs, whether for food, beverages, pharmaceuticals, or consumer goods. Our customized systems integrate smoothly with your existing processes. They offer flexibility and scalability to adapt to changing demands.
Our solutions enhance operational efficiency and cut waste. They also optimize resource usage, supporting more sustainable practices. With real-time monitoring and data analytics, you gain valuable insights. This data enables proactive management and continuous improvement.
Embrace the future of packaging with our automation solutions. Watch your business thrive with improved efficiency and accuracy.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] p-0 m-0">
            <Image
              src="/images/Industryimg/Packagingimg/Rectangle 32.png"
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

export default Automation;
