"use client";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import HeroImage from "../../assets/chooseUs/hero.png";
import QuestionMarkImage from "../../assets/chooseUs/questionMark.png";
import HeroSection from "../../components/HomePageComp/HeroSection.jsx"

const heroSectionData = {
  img_Src : HeroImage,
  title : 'Get in Touch'
}
const WhyUs = () => {
  return (
    <section className=' bg-white'>
      <div className='mx-auto'>
        <HeroSection data={heroSectionData}/>
        <ContactInfo />
        <ContactUs />
        <HowWeCanHelp />
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default WhyUs;

const ContactInfo = () => {
  return (
    <div className='grid grid-cols-1 my-16 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4'>
      {/* Address Section */}
      <div className='flex flex-col'>
        <div className='border-r-4 border-[#ec3436]/20'>
          <div className='flex items-center gap-2 mb-2'>
            <MapPin className='size-10 fill-[#1f1f1f] stroke-white' />
            <span className='text-black text-2xl md:text-3xl  font-medium font-poppins'>
              Address
            </span>
          </div>
          <div className='text-[#ec3436] text-2xl md:text-3xl  font-medium font-poppins mb-3'>
            Visit us at
          </div>
          <div className='space-y-4 text-xl md:text-2xl  font-poppins'>
            <div>
              <div className='text-black font-semibold mb-1'>
                Head Office & Works:
              </div>
              <div className='text-[#606062]'>
                Mohal Saliana,Khasra No 346, Palampur, Kangra,HP ( 176103 )
              </div>
            </div>
            <div>
              <div className='font-semibold text-black mb-1'>
                Corporate Office:
              </div>
              <div className='text-[#606062]'>
                SCO – 69B, Upper Ground Block – 2, City Of Dreams -1, High
                Ground Road, Zirakpur,Nabha, Punjab (140603)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div className='flex flex-col'>
        <div className='border-r-4 border-[#ec3436]/20'>
          <div className='flex items-center gap-2 mb-2'>
            <Send className='size-10 fill-[#1f1f1f]  stroke-white' />
            <span className='text-black text-2xl md:text-3xl font-medium font-poppins'>
              Drop a line...
            </span>
          </div>
          <div className='text-[#ec3436] text-2xl md:text-3xl font-medium font-poppins mb-3'>
            Mail us on
          </div>
          <div className='text-xl md:text-2xl break-all text-[#606062]'>
            info@aarmationelectric.com
          </div>
        </div>
      </div>

      {/* Phone Section */}
      <div className='flex flex-col relative '>
        <div className='border-r-4 border-[#ec3436]/20'>
          <div className='flex items-center gap-2 mb-2'>
            <Phone className='size-10 fill-[#1f1f1f]  stroke-white' />
            <span className='text-black text-2xl md:text-3xl font-medium font-poppins'>
              Phone no.
            </span>
          </div>
          <div className='text-[#ec3436] text-2xl md:text-3xl font-medium font-poppins mb-3'>
            Call us on
          </div>
          <div className='space-y-1 text-[#606062] text-xl md:text-2xl font-medium'>
            <div className=''>Mob : +91 7814000888</div>
            <div className=''>Tel : 1800-8892-319</div>
          </div>
        </div>
      </div>

      {/* Working Hours Section */}
      <div className='flex flex-col'>
        <div className='flex items-center gap-2 mb-2'>
          <Clock className='size-10 fill-[#1f1f1f]  stroke-white' />
          <span className='text-black text-2xl md:text-3xl font-medium font-poppins'>
            Working Hours
          </span>
        </div>
        <div className='text-[#ec3436] text-2xl md:text-3xl font-medium font-poppins mb-3'>
          Opening Time
        </div>
        <div className='space-y-1 text-xl md:text-2xl font-medium text-[#606062]'>
          <div className=''>Monday to Friday</div>
          <div className=''>9 am - 5 pm</div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      id: "01",
      title: "Expertise in Automation Technology",
      description:
        "Our team comprises industry experts with in-depth knowledge of the latest automation technologies. We leverage this expertise to deliver top-quality solutions that meet your unique needs.",
    },
    {
      id: "02",
      title: "Customer-Focused Service",
      description:
        "At Aarmation Electric, we prioritize your satisfaction. We take the time to understand your requirements and work closely with you to provide tailored solutions that drive efficiency and success.",
    },
    {
      id: "03",
      title: "Innovative Solutions",
      description:
        "We stay ahead of industry trends to offer cutting-edge automation solutions. Our technology is designed to optimize performance and give your business a competitive edge.",
    },
  ];

  return (
    <section className='py-12 bg-white text-center font-poppins'>
      <h2 className='text-2xl md:text-3xl font-semibold text-black mb-4'>
        Why Choose Aarmation Electric?
      </h2>
      <div className='w-16 h-1 bg-red-500 mx-auto mb-8'></div>
      <div className='max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 '>
        {features.map((feature) => (
          <div key={feature.id} className='text-left'>
            {/* text-[#ec3436] text-6xl font-semibold */}
            <div className='flex gap-3'>
              <h3 className='text-[#ec3436] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2'>
                {feature.id}
              </h3>
              <h4 className='text-xl w-full sm:text-xl md:text-2xl font-medium text-black mb-2'>
                {feature.title}
              </h4>
            </div>
            <p className='text-[#606062] text-lg font-normal'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:info@aarmationelectric.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
      alert('Email client opened! Please send the email from your default email application.');
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='relative contact_bg_image w-full contact-section mb-10'>
      {/* Contact Form Container */}
      <div className='lg:w-full mx-auto lg:ml-[80px] rounded-lg w-4/5 lg:max-w-2xl px-8 py-10 bg-black/70 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fadeInUp transform hover:translate-y-[-5px]'>
        <div className='transform hover:translate-y-[-2px] transition-all duration-300'>
          <h2 className='text-black text-xl md:text-3xl font-semibold font-poppins animate-slideInLeft'>
            Contact Us
          </h2>
          <h3 className='text-[#ec3436] text-xl md:text-3xl font-bold font-poppins mb-5 animate-slideInRight'>
            Reach and Get in Touch With Us!
          </h3>
        </div>

        <form className='space-y-4 animate-fadeInUp animation-delay-300' onSubmit={handleSubmit}>
          <div className='flex space-x-4'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={formData.name}
              onChange={handleInputChange}
              required
              className='w-1/2 p-3 placeholder-gray-400 text-gray-300 text-lg font-normal border-2 border-gray-400 rounded-md outline-none transition-all duration-300 hover:border-[#ec3436] focus:border-[#ec3436] focus:ring-2 focus:ring-[#ec3436]/20 hover:shadow-md focus:shadow-md transform hover:translate-y-[-1px] focus:translate-y-[-1px]'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
              required
              className='w-1/2 p-3 placeholder-gray-400 text-gray-300 text-lg font-normal border-2 border-gray-400 rounded-md outline-none transition-all duration-300 hover:border-[#ec3436] focus:border-[#ec3436] focus:ring-2 focus:ring-[#ec3436]/20 hover:shadow-md focus:shadow-md transform hover:translate-y-[-1px] focus:translate-y-[-1px]'
            />
          </div>
          <textarea
            name='message'
            placeholder='Message'
            rows='4'
            value={formData.message}
            onChange={handleInputChange}
            required
            className='w-full p-3 placeholder-gray-400 text-gray-300 text-lg font-normal border-2 border-gray-400 rounded-md outline-none transition-all duration-300 hover:border-[#ec3436] focus:border-[#ec3436] focus:ring-2 focus:ring-[#ec3436]/20 hover:shadow-md focus:shadow-md transform hover:translate-y-[-1px] focus:translate-y-[-1px]'
          ></textarea>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`px-4 py-3 text-lg md:text-xl font-normal border border-red-500 rounded-full cursor-pointer transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] ${
              isSubmitting 
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                : 'text-black hover:bg-red-500 hover:text-white'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

const HowWeCanHelp = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(to right, #fee2e2 40%, rgba(254, 226, 226, 0.8) 45%, rgba(255, 255, 255, 0.8) 55%, #ffffff 60%)",
      }}
      className='py-12'
    >
      <div className='mx-auto flex gap-8 flex-col md:flex-row items-center'>
        {/* Left Side - Image */}
        <div className='w-full md:w-2/5 flex justify-center'>
          <Image
            src={QuestionMarkImage}
            alt='Question mark'
            className='w-full object-contain md:px-0 pl-8 pr-4'
          />
        </div>

        {/* Right Side - Content */}
        <div className='w-full md:w-3/5 md:pl-0 px-8 text-left font-poppin'>
          <h2 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-black mb-4'>
            How We Can Help
          </h2>
          <div className='w-16 h-1 bg-red-500 mb-6'></div>

          <div className='mb-6'>
            <h3 className='text-[#ec3436] text-xl sm:text-2xl md:text-3xl font-medium mb-2'>
              Explore Automation Solutions
            </h3>
            <p className='text-[#606062] sm:text-xl font-normal'>
              Looking for customized automation solutions? Contact us to
              discover how our technology can enhance your operations.
            </p>
          </div>

          <div className='mb-6'>
            <h3 className='text-[#ec3436] text-xl sm:text-2xl md:text-3xl font-medium mb-2'>
              Technical Support
            </h3>
            <p className='text-[#606062] sm:text-xl font-normal'>
              Experiencing issues with your current systems? Our expert support
              team is ready to provide solutions and ensure your systems run
              smoothly.
            </p>
          </div>

          <div>
            <h3 className='text-[#ec3436] text-xl sm:text-2xl md:text-3xl font-medium mb-2'>
              Project Consultation
            </h3>
            <p className='text-[#606062] sm:text-xl font-normal'>
              Have a new project in mind? Get in touch to discuss how our
              automation technology can bring your ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
