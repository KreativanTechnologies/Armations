import React from 'react';

const ScadaInfo = () => {
  return (
    <div className="bg-white">
      {/* SCADA Info Section */}
      <div className="flex flex-col md:flex-row border-2">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="border bg-white w-full max-w-3xl max-h-96 p-2 md:relative md:left-8">
            <p className="text-gray-700 p-2">
              <strong className="font-semibold font-poppins text-base sm:text-lg md:text-xl text-[#606062]">
                Supervisory control and data acquisition
              </strong>
              <span className="font-normal font-poppins text-base sm:text-lg md:text-xl">
                (SCADA) is a system of software and hardware elements that allows industrial organizations to:
              </span>
            </p>
            <ul className="list-disc list-inside text-[#EC3436] text-base sm:text-lg md:text-xl font-normal font-poppins mt-4 space-y-2">
              <li>Control industrial processes locally or at remote locations</li>
              <li>Monitor, gather, and process real-time data</li>
              <li>
                Directly interact with devices such as sensors, valves, pumps, motors, and more
                through human-machine interface (HMI) software
              </li>
              <li>Record events into a log file</li>
            </ul>
            <p className="text-[#606062] text-base sm:text-lg md:text-xl font-normal font-poppins mt-4">
              SCADA systems are crucial for industrial organizations since they help to maintain efficiency,
              process data for smarter decisions, and communicate system issues to help mitigate downtime.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 border-2 flex justify-center items-center">
          <img
            src="/images/supervisory/ScadaInfo.png"
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-full object-contain"
          />
        </div>
      </div>

      {/* Optimization Section */}
      <div className="bg-white">
        <div className="mt-3">
          <h1 className="text-xl sm:text-2xl md:text-[40px] font-semibold font-poppins text-black text-center">
            Optimizing Performance Through SCADA
          </h1>
          <div className="border-2 border-[#EC3436] max-w-20 rounded-full mx-auto my-2" />
        </div>
        {/* Optimization Content */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          <div className="w-full md:w-[45%] md:relative md:left-16 md:z-0 flex justify-center items-center">
            <img
              src="/images/supervisory/scadaInfo2.png"
              alt=""
              className="w-full max-w-xs sm:max-w-sm md:max-w-full object-contain"
            />
          </div>
          <div className="w-full md:w-[65%] flex justify-center items-center md:z-50">
            <div className="text-base sm:text-lg md:text-xl font-medium font-poppins text-[#606062] bg-[#F5F5F5] p-4 sm:p-6">
              Many power, electric, and water companies still rely on manual labor for measurements and adjustments. SCADA systems can automate these tasks easily. Automation with SCADA cuts labor costs and reduces measurement errors. The system offers benefits like redundancy adjustments, stable backups, and a secure alarm system. Instead of manual checks, SCADA uses scripts to detect and fix system issues. This prevents outages and quickly resolves any that occur. If an outage happens, SCADA’s distributed database helps workers locate the failure instantly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScadaInfo;
