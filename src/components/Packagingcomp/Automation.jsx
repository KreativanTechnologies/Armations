import Image from 'next/image';
import Head from 'next/head';

const Automation = () => {
  return (
    <>
      <Head>
        <title>Automation for the  Packaging indusrty</title>
      </Head>

      <div className="flex flex-col md:flex-row md:items-center bg-white m-0 p-0 mt-20">
        
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-black p-20">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-red-600">Automation</span> for the  Packaging indusrty
          </h2>
          <div className="w-44 h-1 bg-red-500 rounded-lg"></div>
          <p>
            In the fast-paced packaging world, efficiency and precision are crucial. Automation for the Packaging Industry offers transformative solutions. Our systems streamline operations, cut costs, and boost productivity.
Advanced automation technologies improve speed and accuracy significantly. Automated systems perform repetitive tasks like sorting, filling, sealing, and labeling with high precision. These systems minimize human error and reduce manual labor needs. They speed up production and ensure consistent quality. This consistency is vital for maintaining brand reputation and meeting regulations.
We tailor our automation solutions to fit the packaging sector’s needs, whether for food, beverages, pharmaceuticals, or consumer goods. Our customized systems integrate smoothly with your existing processes. They offer flexibility and scalability to adapt to changing demands.
Our solutions enhance operational efficiency and cut waste. They also optimize resource usage, supporting more sustainable practices. With real-time monitoring and data analytics, you gain valuable insights. This data enables proactive management and continuous improvement.
Embrace the future of packaging with our automation solutions. Watch your business thrive with improved efficiency and accuracy.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 relative p-0 m-0 h-[400px] sm:h-[500px] md:h-[600px]">
  <Image
    src="/images/Industryimg/Packagingimg/Rectangle 32.png"
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

export default Automation;
