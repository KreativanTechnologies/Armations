"use client";
import React, { useState } from 'react';
import HeroSection from '../../components/HomePageComp/HeroSection';
const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const newsData = [
    {
      id: 1,
      image: "/images/blog/lc.jpg",
      date: "March 1, 2025",
      title: "Understanding Logic Controllers: The Heart of Industrial Automation",
      description: "A logic controller is an electronic device that uses programmed instructions to control machinery and processes in industrial settings. Originally developed to replace relay-based control systems, PLCs are now central to automation in manufacturing, assembly lines, and process control.",
      content: (
        <div>
          <p className="mb-5">A logic controller is an electronic device that uses programmed instructions to control machinery and processes in industrial settings. Originally developed to replace relay-based control systems, PLCs are now central to automation in manufacturing, assembly lines, and process control.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Core Components of Logic Controllers</h3>
          <p className="mb-5">Modern PLCs consist of several key components: the central processing unit (CPU) that executes control programs, input/output modules that interface with field devices, memory units for storing programs and data, and communication interfaces for networking with other systems.</p>

          <p className="mb-5">The flexibility of programmable logic controllers allows engineers to modify control logic without rewiring hardware, making them ideal for complex manufacturing processes that require frequent changes or updates.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Applications in Modern Industry</h3>
          <p className="mb-5">From automotive assembly lines to chemical processing plants, logic controllers are the backbone of industrial automation. They enable precise control of motors, valves, sensors, and other devices while providing real-time monitoring and fault detection capabilities.</p>

          <p className="mb-5">As Industry 4.0 continues to evolve, logic controllers are becoming increasingly sophisticated, incorporating advanced features like predictive maintenance, remote monitoring, and integration with IoT platforms.</p>
        </div>
      )
    },
    {
      id: 2,
      image: "/images/NewsStories/Operator.png",
      date: "March 1, 2025",
      title: "Understanding Industrial Sensors: The Backbone of Modern Automation",
      description: "In today's fast-paced industrial environment, automation and precision are paramount. At the heart of this technological revolution lie industrial sensors, essential devices that monitor and measure various parameters in manufacturing processes.",
      content: (
        <div>
          <p className="mb-5">In today's fast-paced industrial environment, automation and precision are paramount. At the heart of this technological revolution lie industrial sensors, essential devices that monitor and measure various parameters in manufacturing processes.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Types of Industrial Sensors</h3>
          <p className="mb-5">Industrial sensors come in many varieties, each designed for specific applications. Temperature sensors monitor thermal conditions, pressure sensors measure fluid and gas pressures, proximity sensors detect object presence, and vision sensors provide quality control through image analysis.</p>

          <p className="mb-5">Level sensors ensure proper material quantities in tanks and hoppers, while flow sensors monitor the movement of liquids and gases through pipelines. Each type plays a crucial role in maintaining operational efficiency and safety.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Integration with Automation Systems</h3>
          <p className="mb-5">Modern industrial sensors are designed to seamlessly integrate with PLCs, SCADA systems, and other automation platforms. This integration enables real-time data collection, analysis, and response to changing conditions.</p>

          <p className="mb-5">The data collected by these sensors is invaluable for predictive maintenance, quality assurance, and process optimization, helping manufacturers reduce downtime and improve product quality.</p>
        </div>
      )
    },
    {
      id: 3,
      image: "/images/blog/iot.png",
      date: "March 1, 2025",
      title: "IoT Experts: Your Guide to Navigating the Industrial Revolution",
      description: "The Internet of Things is changing the industrialization process completely by connecting billions of devices through sensors, software, and network connectivity. All these devices make it easy to collect data and analyze, making it easy to bring major changes into the industrialization process.",
      content: (
        <div>
          <p className="mb-5">The Internet of Things is changing the industrialization process completely by connecting billions of devices through sensors, software, and network connectivity. All these devices make it easy to collect data and analyze, making it easy to bring major changes into the industrialization process.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">IoT in Manufacturing</h3>
          <p className="mb-5">Smart factories leverage IoT technology to create interconnected systems where machines, sensors, and control systems communicate seamlessly. This connectivity enables real-time monitoring, predictive maintenance, and adaptive manufacturing processes.</p>

          <p className="mb-5">IoT devices collect vast amounts of data from production lines, environmental conditions, and equipment performance. This data is then analyzed using advanced analytics and machine learning algorithms to optimize operations and prevent failures.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Benefits of IoT Implementation</h3>
          <p className="mb-5">Companies implementing IoT solutions report significant improvements in operational efficiency, reduced maintenance costs, and enhanced product quality. Remote monitoring capabilities allow for proactive maintenance and faster response to issues.</p>

          <p className="mb-5">The integration of IoT with existing industrial systems creates opportunities for innovative business models and improved customer experiences through better product tracking and service delivery.</p>
        </div>
      )
    },
    {
      id: 4,
      image: "/images/blog/ti.png",
      date: "March 2, 2025",
      title: "Transforming Industries with SCADA Innovation",
      description: "Role of SCADA in Automation with rapid changes in electrical systems, monitoring and controlling these systems quickly is crucial. SCADA, or Supervisory Control and Data Acquisition, plays an irreplaceable role here. As an innovative electrical company, we proudly offer modern SCADA systems.",
      content: (
        <div>
          <p className="mb-5">Role of SCADA in Automation with rapid changes in electrical systems, monitoring and controlling these systems quickly is crucial. SCADA, or Supervisory Control and Data Acquisition, plays an irreplaceable role here. As an innovative electrical company, we proudly offer modern SCADA systems.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">SCADA System Architecture</h3>
          <p className="mb-5">Modern SCADA systems consist of several interconnected components: Human Machine Interfaces (HMIs) for operator interaction, Remote Terminal Units (RTUs) for data collection, communication networks for data transmission, and central servers for data processing and storage.</p>

          <p className="mb-5">These systems provide real-time visibility into industrial processes, enabling operators to monitor equipment status, track production metrics, and respond quickly to alarms and anomalies.</p>

          <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Benefits in Industrial Applications</h3>
          <p className="mb-5">SCADA systems enhance operational efficiency by providing centralized control and monitoring capabilities. They enable remote operation of equipment, reduce the need for manual intervention, and improve safety by providing early warning systems.</p>

          <p className="mb-5">Advanced SCADA systems incorporate features like historical data trending, alarm management, and integration with enterprise systems, making them essential tools for modern industrial operations and digital transformation initiatives.</p>
        </div>
      )
    }
  ];

  const openBlog = (id) => {
    const post = newsData.find(p => p.id === id);
    setSelectedBlog(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };
  const heroSectionData = {
    img_Src: '/images/blog/blogimg.png',
    title: 'The Future of Manufacturing with an Industrial Automation Company',
    desc: 'In the rapidly evolving manufacturing landscape, staying ahead of the curve is crucial. An industrial automation company is pivotal in reshaping how industries operate, providing solutions that enhance efficiency, productivity, and scalability. From streamlining production processes to integrating advanced technologies like AI and IoT, automation industries are the cornerstone of modern manufacturing. Partnering with the best automation company in India can help businesses stay competitive and smooth their operations with minimal human effort.',
  }
  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeBlog();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen ">
      <HeroSection data={heroSectionData} />

      <div className="container mx-auto px-5 py-5 max-w-6xl">

        <div className="w-full py-10 flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-4xl text-black font-bold">Latest News And Stories</h1>
          <hr className="h-1 bg-orange-600 w-1/5 md:w-1/12 border-none rounded-4xl" />
        </div>

        {!selectedBlog && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">

            {newsData.map((post) => (
              <div
                key={post.id}
                onClick={() => openBlog(post.id)}
                className="bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl group relative"
              >
                {/* Color accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-teal-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Blog Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 md:h-52 object-cover"
                />

                {/* Blog Content */}
                <div className="p-7">
                  <div className="text-gray-500 text-sm mb-4">{post.date}</div>
                  <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {post.description}
                  </p>
                  <a href="#" className="text-blue-500 font-bold text-sm uppercase tracking-wider hover:text-blue-600 transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Full Blog Post */}
        {selectedBlog && (
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative animate-fadeInUp">
            {/* Close Button */}
            <button
              onClick={closeBlog}
              className="absolute top-5 right-7 w-10 h-10 bg-red-400 hover:bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 hover:rotate-90"
            >
              ×
            </button>

            {/* Featured Image */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
            />

            {/* Blog Content */}
            <div className="text-gray-500 italic mb-8">{selectedBlog.date}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight">
              {selectedBlog.title}
            </h2>
            <div className="prose max-w-none text-lg text-gray-700 leading-relaxed">
              {selectedBlog.content}
            </div>

            {/* Back Button */}
            <button
              onClick={closeBlog}
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              ← Back to News List
            </button>
          </div>
        )}
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;