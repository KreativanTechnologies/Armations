"use client";
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
const AarmationLanding = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialLinks = [
        { icon: Facebook, name: 'Aarmation', color: 'bg-blue-600', handle: 'Aarmation' },
        { icon: Instagram, name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500', handle: 'aarmation_electric' },
        { icon: Linkedin, name: 'LinkedIn', color: 'bg-blue-700', handle: 'aarmation_electric' },
        { icon: Youtube, name: 'YouTube', color: 'bg-red-600', handle: 'aarmation_electric' },
    ];

    const particlesInit = async (main) => {
        await loadFull(main)
    }

    const particlesLoaded = (container) => {
        // console.log(container);
    }

    const particleOptions = {
        fullScreen: {
            enable: false, // THIS IS THE CRUCIAL CHANGE
        },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }


    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image + Overlay */}
            <div className="absolute inset-0">
                {/* Background Image with brightness filter */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-80"
                    style={{
                        backgroundImage: `url('/images/home/Sbg.png')`, // Replace with your actual path
                    }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleOptions}
                className="absolute inset-0 z-0"
                style={{ width: "100%", height: "100%" }} // Explicitly set dimensions
            />
            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-40 text-center px-6">
                {/* Main Heading */}
                <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        <span className="bg-red-500 bg-clip-text text-transparent animate-pulse">
                            TRANSFORM
                        </span>
                        <br />
                        <span className="text-white">YOUR BUSINESS</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        with cutting-edge automation solutions
                    </p>
                </div>

                {/* Social Media Section */}
                <div className={`mb-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <div
                                    key={social.name}
                                    className="group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                                >
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25">
                                        <div className={`inline-flex p-3 rounded-xl ${social.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="text-white" size={24} />
                                        </div>
                                        <p className="text-white font-semibold text-lg mb-1">{social.handle}</p>
                                        <p className="text-gray-300 text-sm">Follow us on {social.name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Website Section
                <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:shadow-blue-500/25">
                        <p className="text-xl text-gray-300 mb-4 font-medium">Explore more on</p>
                        <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <Globe className="text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300" size={28} />
                            <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                www.aarmationelectric.com/
                            </span>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default AarmationLanding;
