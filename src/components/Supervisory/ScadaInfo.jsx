export default function ScadaInfo() {
  return (
    <div className="bg-background py-12">
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-3xl p-4 md:p-6 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] bg-card text-card-foreground">
            <div className="p-0">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                <strong className="font-semibold text-xl sm:text-2xl text-gray-700">
                  Supervisory control and data acquisition
                </strong>{" "}
                <span className="font-normal">
                  (SCADA) is a system of software and hardware elements that allows industrial organizations to:
                </span>
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg md:text-xl font-normal mt-4 space-y-2">
                <li>Control industrial processes locally or at remote locations</li>
                <li>Monitor, gather, and process real-time data</li>
                <li>
                  Directly interact with devices such as sensors, valves, pumps, motors, and more through human-machine
                  interface (HMI) software
                </li>
                <li>Record events into a log file</li>
              </ul>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl font-normal mt-4 leading-relaxed">
                SCADA systems are crucial for industrial organizations since they help to maintain efficiency, process
                data for smarter decisions, and communicate system issues to help mitigate downtime.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/supervisory/ScadaInfo.png"
            alt="SCADA system overview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg object-contain rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Optimization Section */}
      <section className=" py-12">
        <div className="mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 text-center">
            Optimizing Performance Through SCADA
          </h1>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto my-4" />
        </div>
        {/* Optimization Content */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 mt-8">
          <div className="w-full md:w-[45%] flex justify-center items-center">
            <img
              src="/images/supervisory/scadaInfo2.png"
              alt="SCADA optimization diagram"
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg rounded-lg object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-[65%] flex justify-center items-center">
            {/* This div was already a standard div, but ensuring its classes are correct */}
            <div className="text-base sm:text-lg md:text-xl font-medium text-gray-700  p-6 sm:p-8 rounded-lg shadow-md leading-relaxed transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
              Many power, electric, and water companies still rely on manual labor for measurements and adjustments.
              SCADA systems can automate these tasks easily. Automation with SCADA cuts labor costs and reduces
              measurement errors. The system offers benefits like redundancy adjustments, stable backups, and a secure
              alarm system. Instead of manual checks, SCADA uses scripts to detect and fix system issues. This prevents
              outages and quickly resolves any that occur. If an outage happens, SCADA’s distributed database helps
              workers locate the failure instantly.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
