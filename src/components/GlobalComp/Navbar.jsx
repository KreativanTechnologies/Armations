"use client";
import { ChevronRight, Globe, Mail, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import Logo from "../Logo";
import Link from "next/link";

const solutions = {
  title: "Solutions",
  items: [
    { name: "Customized Solutions", href: "/Solution/CustomizedSolutions" },
    { name: "Energy Saving Solutions", href: "/Solution/EnergySaving" },
    { name: "Turnkey Systems", href: "/Solution/TurnkeySystems" },
    { name: "Distributed Control Systems", href: "/Solution/DistrictCS" },
    { name: "Switchgear Solutions", href: "/Solution/SwitcherSol" },
    {
      name: "Supervisory Control & Data Acquisition",
      href: "/Solution/SupervisoryCDA",
    },
  ],
};

const industries = {
  title: "Industries",
  items: [
    { name: "Textile Industry", href: "/Industry/Textile" },
    { name: "Pharmaceutical Industry", href: "/Industry/Pharma" },
    { name: "Machine Tool Industry", href: "/Industry/MachineTools" },
    { name: "Automation Industry", href: "/Industry/Automation" },
    { name: "Plastic Industry", href: "/Industry/Plastic" },
    { name: "Packaging Industry", href: "/Industry/Packaging" },
    { name: "Ceramic Industry", href: "/Industry/Ceramic" },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (activeDropdown === "Solutions") {
      setCurrentIndex((prev) => (prev + 1) % solutions.items.length);
    } else if (activeDropdown === "Industries") {
      setCurrentIndex((prev) => (prev + 1) % industries.items.length);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto">
        <div className="flex justify-between">
          <Logo />

          <div className="hidden lg:block destop-side-2 w-full">
            <div className="w-full basis-full h-[51px] bg-[#939393]" />
            <div className="grid grid-cols-6 pr-8 items-center justify-center h-[74px] bg-gray-100 bg-opacity-90">
              <div></div>
              <div className="flex col-span-3 font-poppin items-center h-full justify-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-gray-900 font-bold">
                  Home
                </Link>
                <Link
                  href="/About"
                  className="text-gray-700 hover:text-gray-900 font-bold"
                >
                  About
                </Link>

                {/* Solutions Dropdown */}
                <div
                  onMouseEnter={() => setActiveDropdown("Solutions")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-gray-700 hover:text-gray-900">
                    Solutions
                  </button>
                  {activeDropdown === "Solutions" && (
                    <div className="absolute z-50 inset-x-0 w-full pt-8 bg-transparent">
                      <div className="shadow-xl flex bg-white">
                        <div className="w-1/3 border-Color bg-[#ec3436]/10 p-4 rounded-l-lg">
                          <h3 className="pt-6 w-[308px] mx-auto flex items-center justify-between text-center text-[#333333] text-3xl font-normal font-poppins">
                            Solutions
                            <ChevronRight
                              className="cursor-pointer hover:text-pink-600"
                              onClick={handleNext}
                            />
                          </h3>
                        </div>
                        <div className="w-full p-12 grid grid-cols-2 gap-4">
                          {solutions.items.map((item, index) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block justify-center text-[#333333] text-[29px] font-normal font-poppins transition-opacity duration-300 ${
                                index === currentIndex
                                  ? "opacity-100"
                                  : "opacity-50"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Industries Dropdown */}
                <div
                  onMouseEnter={() => setActiveDropdown("Industries")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-gray-700 hover:text-gray-900">
                    Industries
                  </button>
                  {activeDropdown === "Industries" && (
                    <div className="absolute z-50 inset-x-0 w-full pt-8 bg-transparent">
                      <div className="shadow-xl flex bg-white">
                        <div className="w-1/3 border-Color bg-[#ec3436]/10 p-4 rounded-l-lg">
                          <h3 className="pt-6 w-[308px] mx-auto flex items-center justify-between text-center text-[#333333] text-3xl font-normal font-poppins">
                            Industries
                            <ChevronRight
                              className="cursor-pointer hover:text-pink-600"
                              onClick={handleNext}
                            />
                          </h3>
                        </div>
                        <div className="w-full p-12 grid grid-cols-2 gap-4">
                          {industries.items.map((item, index) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block justify-center text-[#333333] text-[29px] font-normal font-poppins transition-opacity duration-300 ${
                                index === currentIndex
                                  ? "opacity-100"
                                  : "opacity-50"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/Blog"
                  className="text-gray-700 hover:text-gray-900 font-bold"
                >
                  Blog
                </Link>
                <Link
                  href="/WhyUs"
                  className="text-gray-700 hover:text-gray-900 font-bold"
                >
                  Contact Us
                </Link>
              </div>

              <div className="hidden col-span-2 md:flex items-center justify-end space-x-4">
                <Search className="w-5 h-5 text-red-600 stroke-1 cursor-pointer" />
                <Globe className="w-5 h-5 text-red-600 stroke-1 cursor-pointer" />
                <Mail className="w-5 h-5 text-red-600 stroke-1 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden pr-8 items-center flex justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 font-bold">
              Home
            </Link>
            <Link href="/About" className="block px-3 py-2 text-gray-700 font-bold">
              About Us
            </Link>
            <Link href="/products" className="block px-3 py-2 text-gray-700 font-bold">
              Products
            </Link>

            {/* Mobile Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "Solutions" ? null : "Solutions"
                  )
                }
                className="w-full text-left px-3 py-2 text-gray-700 flex justify-between items-center"
              >
                Solutions
                <ChevronRight
                  className={`transform transition-transform ${
                    activeDropdown === "Solutions" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeDropdown === "Solutions" && (
                <div className="pl-6">
                  {solutions.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "Industries" ? null : "Industries"
                  )
                }
                className="w-full text-left px-3 py-2 text-gray-700 flex justify-between items-center"
              >
                Industries
                <ChevronRight
                  className={`transform transition-transform ${
                    activeDropdown === "Industries" ? "rotate-90" : ""
                  }`}
                />
              </button>
              {activeDropdown === "Industries" && (
                <div className="pl-6">
                  {industries.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/Blog" className="block px-3 py-2 text-gray-700 font-bold">
              Blog
            </Link>
            <Link href="/WhyUs" className="block px-3 py-2 text-gray-700 font-bold">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
