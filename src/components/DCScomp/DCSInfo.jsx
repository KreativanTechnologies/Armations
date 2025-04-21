const DCSInfo = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg">
          
          {/* Main Components */}
          <h2 className="text-2xl font-bold text-[#00a651] mb-4 font-poppins">
            Main Components:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 font-medium">
            <li><strong>Engineering Workstation</strong> – Used for configuration, monitoring, and diagnostics.</li>
            <li><strong>Operator Station (HMI)</strong> – Allows operators to view and control processes.</li>
            <li><strong>Controllers/Processors</strong> – Perform control algorithms and data processing.</li>
            <li><strong>I/O Modules</strong> – Interface between field devices and controllers.</li>
            <li><strong>Communication Network</strong> – Connects all parts of the system (typically Ethernet or fieldbus).</li>
          </ul>
  
          {/* Applications */}
          <h2 className="text-2xl font-bold text-[#00a651] mt-10 mb-4 font-poppins">
            Applications of DCS:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 font-medium">
            <li>Water Treatment Plants (WTP/STP)</li>
            <li>Oil & Gas</li>
            <li>Power Plants</li>
            <li>Pharmaceuticals</li>
            <li>Food & Beverage</li>
            <li>Chemical Manufacturing</li>
          </ul>
  
          {/* Benefits */}
          <h2 className="text-2xl font-bold text-[#00a651] mt-10 mb-4 font-poppins underline">
            Benefits of DCS:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-3 font-medium">
            <li>
              Enhanced <strong>process reliability</strong> and <strong>safety</strong>
            </li>
            <li>
              Improved <strong>data acquisition and analysis</strong>
            </li>
            <li>
              Simplified <strong>maintenance and troubleshooting</strong>
            </li>
            <li>
              Better <strong>integration with SCADA and IoT</strong> systems
            </li>
          </ul>
  
        </div>
      </div>
    );
  };
  
  export default DCSInfo;
  