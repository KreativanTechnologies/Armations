import React from "react";

const AtArmation = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen py-8 sm:py-12 md:py-16 lg:py-20 flex px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-slate-600 flex flex-col justify-center lg:pr-16 xl:pr-20 font-normal">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            At Aarmation Electric
          </h1>
          <hr className="h-1 bg-orange-600 w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/6 border-none rounded-full mt-2" />
          <p className="text-base sm:text-lg md:text-xl lg:text-xl mt-4 sm:mt-6 md:mt-8 leading-relaxed">
            We transform business operations with cutting-edge automation solutions tailored to your needs. Our technology streamlines complex processes, boosts efficiency, and drives cost savings. We specialize in automating routine tasks, optimizing workflows, and integrating advanced systems to enhance productivity and innovation.
            <br />
            <br />
            Our expert team collaborates closely with you to design and implement solutions that address your unique challenges and goals. By leveraging state-of-the-art tools and industry best practices, we help you achieve greater accuracy, speed, and operational excellence.
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full lg:w-1/2 h-96 sm:h-[500px] md:h-[600px] lg:h-[500px]">
          <div className="w-full h-full flex relative">
            {/* First Image - Top Left */}
            <div className="w-3/5 h-3/5 absolute -top-4 -left-2 sm:-left-4 lg:top-[19%] lg:h-[65%] lg:w-[60%] overflow-hidden z-10 hover:z-40 hover:scale-105 transition-all duration-1000 hover:opacity-100 cursor-pointer rounded-2xl hover:rounded-3xl shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="/images/NewsStories/Plug.png"
                alt="Electrical Plug"
              />
            </div>

            {/* Second Image - Top Right */}
            <div className="w-3/5 h-2/5 sm:h-1/2 absolute top-0 right-0 sm:right-4 lg:right-[4%] lg:-top-12 lg:h-[55%] lg:w-[60%] overflow-hidden hover:z-40 hover:scale-105 transition-all duration-1000 hover:opacity-100 cursor-pointer rounded-2xl hover:rounded-3xl shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="/images/NewsStories/Operator.png"
                alt="Operator"
              />
            </div>

            {/* Third Image - Bottom Right */}
            <div className="w-4/5 h-3/5 sm:h-2/3 absolute -right-2 -bottom-0 sm:-right-4 lg:-right-[2%] lg:bottom-7
             lg:h-[50%] lg:w-[55%] overflow-hidden z-20 hover:z-40 hover:scale-105 transition-all duration-1000 hover:opacity-100 rounded-2xl cursor-pointer hover:rounded-3xl shadow-lg">
              <img
                className="w-full h-full object-cover"
                src="/images/AtArmation/Enginee.png"
                alt="Engineer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtArmation;