import React from "react";

const AtArmation = () => {
  return (
    <div className="bg-gray-100 w-full h-screen py-[8vw] flex px-6 md:px-[6vw]">
      <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-0">
        <div className="w-full h-full text-slate-600 flex flex-col justify-center pr-[10vw] font-normal">
          <h1 className="text-xl md:text-4xl font-bold text-black">
            At Aarmation Electric
          </h1>
          <hr className="h-1 bg-orange-600 w-[40%] md:w-1/6 border-none rounded-4xl -mt-1" />
          <p className="text-sm md:text-xl mt-[1vw]">
            We transform business operations with cutting-edge automation solutions tailored to your needs. Our technology streamlines complex processes, boosts efficiency, and drives cost savings. We specialize in automating routine tasks, optimizing workflows, and integrating advanced systems to enhance productivity and innovation.
            <br />
            Our expert team collaborates closely with you to design and implement solutions that address your unique challenges and goals. By leveraging state-of-the-art tools and industry best practices, we help you achieve greater accuracy, speed, and operational excellence.
          </p>
        </div>

        <div className="w-full h-full">
          <div className="w-full h-full flex relative">
            <div className="w-1/2 h-2/3 -top-4 -left-2 md:-left-4 md:top-[19%] md:h-[65%] md:w-[60%] absolute overflow-hidden z-10 hover:z-10 hover:scale-105 duration-1000 hover:opacity-100 cursor-pointer rounded-2xl hover:rounded-[3vw]">
              <img
                className="w-full h-full object-cover"
                src="/images/NewsStories/Plug.png"
                alt="HMTL"
              />
            </div>

            <div className=" w-1/2 h-1/2 top-0 right-0  md:right-[4%] md:-top-12 md:h-[55%] md:w-[60%] absolute overflow-hidden hover:z-30 hover:scale-105 duration-1000 hover:opacity-100 cursor-pointer rounded-2xl hover:rounded-[3vw]">
              <img
                className="w-full h-full object-cover"
                src="/images/NewsStories/Operator.png"
                alt="Node"
              />
            </div>

            <div className="w-[80%] h-2/3 -right-2 -bottom-2 md:-right-[3%] md:bottom-2 md:h-[50%] md:w-[55%] absolute overflow-hidden z-20 hover:z-30 hover:scale-105 duration-1000 hover:opacity-100 rounded-2xl cursor-pointer hover:rounded-[3vw]">
              <img
                className="w-full h-full object-cover"
                src="/images/AtArmation/Enginee.png"
                alt="Code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtArmation;
