import Image from 'next/image';
import Head from 'next/head';

const Automation = () => {
  return (
    <>
      <Head>
        <title>Automation for the Packaging Industry</title>
      </Head>
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 md:p-10 bg-white mt-6 mx-4 md:mx-10">
    
        <div className="md:w-1/2 w-full space-y-4 text-black ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-red-600">Automation</span> for the Packaging Industry
          </h2>
          <div className="w-50 h-1 bg-red-500 rounded-lg"></div>
          <p className="text-sm sm:text-base md:text-base">
            In the fast-paced packaging world, efficiency and precision are crucial. Automation for the Packaging Industry offers transformative solutions. Our systems streamline operations, cut costs, and boost productivity. 
            Advanced automation technologies improve speed and accuracy significantly. Automated systems perform repetitive tasks like sorting, filling, sealing, and labeling with high precision. These systems minimize human error and reduce manual labor needs. They speed up production and ensure consistent quality. This consistency is vital for maintaining brand reputation and meeting regulations.
            We tailor our automation solutions to fit the packaging sector’s needs, whether for food, beverages, pharmaceuticals, or consumer goods. Our customized systems integrate smoothly with your existing processes. They offer flexibility and scalability to adapt to changing demands.
            Our solutions enhance operational efficiency and cut waste. They also optimize resource usage, supporting more sustainable practices. With real-time monitoring and data analytics, you gain valuable insights. This data enables proactive management and continuous improvement.
            Embrace the future of packaging with our automation solutions. Watch your business thrive with improved efficiency and accuracy.
          </p>
        </div>

        <div className="w-full lg:w-[50%] h-[250px] sm:h-[400px] md:h-[450px] relative overflow-hidden mt-6 md:mt-0">
          <Image
            src="/images/Industryimg/Packagingimg/Rectangle 32.png"
            alt="Business technology meeting"
            layout="fill"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Automation;
