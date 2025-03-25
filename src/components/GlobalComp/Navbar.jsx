"use client";
import { ChevronRight, Globe, Mail, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Logo from "../Logo";

const solutions = {
  title: "Solutions",
  items: [
    {
      name: "Customized Solutions",
      href: "/Solutions/CustomizedSolutions",
    },
    {
      name: "Energy Saving Solutions",
      href: "/EnergySavingSolutions",
    },
    {
      name: "Turnkey Systems",
      href: "/Solutions/TurnkeySystems",
    },
    {
      name: "Distributed Control Systems",
      href: "/DistributedControlSystems",
    },
    {
      name: "Switchgear Solutions",
      href: "/SwitchgearSolutions",
    },
    {
      name: "Supervisory Control & Data Acquisition",
      href: "/SupervisoryControlDataAcquisition",
    },
  ],
};

const industries = {
  title: "Industries",
  items: [
    "Textile Industry",
    "Pharmaceutical Industry",
    "Machine Tool Industry",
    "Automation Industry",
    "Plastic Industry",
    "Packaging Industry",
    "Ceramic Industry",
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    console.log("----handle nextLick");
    if (activeDropdown === "Solutions") {
      setCurrentIndex((prev) => (prev + 1) % solutions.items.length);
    } else if (activeDropdown === "Industries") {
      setCurrentIndex((prev) => (prev + 1) % industries.items.length);
    }
  };

  return (
    <nav className='bg-white shadow-lg'>
      <div className='mx-auto'>
        <div className='flex justify-between'>
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className='hidden lg:block destop-side-2 w-full'>
            <div className='w-full basis-full h-[51px] bg-[#939393]' />
            <div className='grid grid-cols-6 pr-8 items-center justify-center h-[74px] bg-gray-100 bg-opacity-90'>
              <div></div>
              <div className='flex col-span-3 font-poppin items-center h-full justify-center space-x-8'>
                <a href='/' className='text-gray-700 hover:text-gray-900'>
                  Home
                </a>
                <a href='/About' className='text-gray-700 hover:text-gray-900'>
                  About
                </a>
                <a
                  href='/products'
                  className='text-gray-700 hover:text-gray-900'
                >
                  Products
                </a>

                {/* Solutions Dropdown */}
                <div
                  // className='relative'
                  onMouseEnter={() => setActiveDropdown("Solutions")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className='text-gray-700 hover:text-gray-900'>
                    Solutions
                  </button>
                  {activeDropdown === "Solutions" && (
                    <div className='absolute z-50 inset-x-0  w-full pt-8 bg-transparent'>
                      <div className='shadow-xl flex bg-white '>
                        <div className='w-1/3 border-Color bg-[#ec3436]/10 p-4 rounded-l-lg'>
                          <h3 className=' pt-6 w-[308px] mx-auto flex items-center justify-between text-center text-[#333333] text-3xl font-normal font-poppins'>
                            Solutions
                            <ChevronRight
                              className='cursor-pointer hover:text-pink-600'
                              onClick={handleNext}
                            />
                          </h3>
                        </div>
                        <div className='w-full p-12 grid grid-cols-2 gap-4'>
                          {solutions.items.map((item, index) => (
                            <div
                              key={item.href}
                              className={`justify-center text-[#333333] text-[29px] font-normal font-poppins transition-opacity duration-300 ${
                                index === currentIndex
                                  ? "opacity-100"
                                  : "opacity-50"
                              }`}
                            >
                              {item.name}
                              
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Industries Dropdown */}
                <div
                  // className='relative'
                  onMouseEnter={() => setActiveDropdown("Industries")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className='text-gray-700 hover:text-gray-900'>
                    Industries
                  </button>
                  {activeDropdown === "Industries" && (
                    <div className='absolute z-50 inset-x-0  w-full pt-8 bg-transparent'>
                      <div className='shadow-xl flex bg-white '>
                        <div className='w-1/3 border-Color bg-[#ec3436]/10 p-4 rounded-l-lg'>
                          <h3 className=' pt-6 w-[308px] mx-auto flex items-center justify-between text-center text-[#333333] text-3xl font-normal font-poppins'>
                            Industries
                            <ChevronRight
                              className='cursor-pointer hover:text-pink-600'
                              onClick={handleNext}
                            />
                          </h3>
                        </div>
                        <div className='w-full p-12 grid grid-cols-2 gap-4'>
                          {industries.items.map((item, index) => (
                            <div
                              key={item}
                              className={`justify-center text-[#333333] text-[29px] font-normal font-poppins transition-opacity duration-300 ${
                                index === currentIndex
                                  ? "opacity-100"
                                  : "opacity-50"
                              }`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a href='/blog' className='text-gray-700 hover:text-gray-900'>
                  Blog
                </a>
                <a
                  href='/ContactUs'
                  className='text-gray-700 hover:text-gray-900'
                >
                  Contact Us
                </a>
              </div>

              {/* Right Icons */}
              <div className='hidden col-span-2  md:flex items-center justify-end space-x-4'>
                <Search className='w-5 h-5 text-red-600 stroke-1 cursor-pointer' />
                <Globe className='w-5 h-5 text-red-600 stroke-1 cursor-pointer' />
                <Mail className='w-5 h-5 text-red-600 stroke-1 cursor-pointer' />
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className='lg:hidden pr-8 items-center flex justify-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-600 hover:text-gray-900'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className='lg:hidden bg-white'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a href='/' className='block px-3 py-2 text-gray-700'>
              Home
            </a>
            <a href='/About' className='block px-3 py-2 text-gray-700'>
              About Us
            </a>
            <a href='/products' className='block px-3 py-2 text-gray-700'>
              Products
            </a>

            {/* Mobile Solutions Dropdown */}
            <div className='relative'>
              <button
                onClick={() => {
                  setActiveDropdown(
                    activeDropdown === "Solutions" ? null : "Solutions"
                  );
                }}
                className='w-full text-left px-3 py-2 text-gray-700 flex justify-between items-center'
              >
                Solutions
                <ChevronRight
                  className={`transform transition-transform ${
                    activeDropdown === "Solutions" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeDropdown === "Solutions" && (
                <div className='pl-6'>
                  {solutions.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block px-3 py-2 text-gray-600'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div className='relative'>
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "Industries" ? null : "Industries"
                  )
                }
                className='w-full text-left px-3 py-2 text-gray-700 flex justify-between items-center'
              >
                Industries
                <ChevronRight
                  className={`transform transition-transform ${
                    activeDropdown === "Industries" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeDropdown === "Industries" && (
                <div className='pl-6'>
                  {industries.items.map((item) => (
                    <a
                      key={item}
                      href='#'
                      className='block px-3 py-2 text-gray-600'
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href='/blog'
              className='block px-3 flex-shrink-0 py-2 text-gray-700'
            >
              Blog
            </a>
            <a
              href='/ContactUs'
              className='block shrink-0 px-3 py-2 text-gray-700'
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
