import React from 'react';

const Titlebox = ({ industryName }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 bg-white mt-20 mb-20">
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center text-center">
          <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
            {industryName} Industry
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 sm:mt-0 mt-2">
            Solutions
          </span>
        </div>
        <div className="w-[250px] sm:w-[350px] h-1 mt-4 bg-red-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Titlebox;
