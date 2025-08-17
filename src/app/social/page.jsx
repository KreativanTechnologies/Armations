"use client";
import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AarmationLanding = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newMousePosition = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
            setMousePosition(newMousePosition);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const particlesLoaded = (container) => {
    };

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particleOptions = {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                grab: { distance: 200, line_linked: { opacity: 0.5 } },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
            },
            collisions: { enable: true },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                speed: 1.5,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 60,
            },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    };

    const socialLinks = [
        {
            icon: Facebook,
            name: 'Facebook',
            color: 'from-blue-600 to-blue-800',
            handle: 'Aarmation',
            url: 'https://facebook.com/Aarmation',
            glow: 'shadow-blue-500/50',
        },
        {
            icon: Instagram,
            name: 'Instagram',
            color: 'from-purple-500 via-pink-500 to-orange-500',
            handle: 'aarmation_electric',
            url: 'https://instagram.com/aarmation_electric',
            glow: 'shadow-purple-500/50',
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            color: 'from-blue-700 to-blue-900',
            handle: 'aarmation_electric',
            url: 'https://linkedin.com/in/aarmation_electric',
            glow: 'shadow-blue-400/50',
        },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/home/Sbg.png')`
                }}
            />
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
            
            {/* Additional animated overlay gradients with red/gray theme */}
            <div className="absolute inset-0 opacity-20 z-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-red-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleOptions}
                className="absolute inset-0 z-0"
                style={{ width: "100%", height: "100%" }}
            />

            {/* Main Content */}
            <div className="relative py-10 z-40 flex flex-col items-center justify-center min-h-screen px-6">
                {/* Heading with 3D Transform */}
                <div 
                    className={`mb-20 transform transition-all duration-1500 delay-300 ${
                        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
                    }`}
                    style={{
                        transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
                    }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mt-28 leading-tight">
                        <span className="bg-gradient-to-r from-red-300 via-red-800 to-gray-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                            TRANSFORM
                        </span>
                        <br />
                        <span className="text-gray-300 drop-shadow-2xl animate-bounce">
                            YOUR BUSINESS
                        </span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
                        with cutting-edge <span className="text-red-500 font-semibold">automation solutions</span>
                    </p>
                </div>

                {/* 3D Social Media Cards */}
                <div className={`transform transition-all duration-1500 delay-800 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <div
                                    key={social.name}
                                    className="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-4"
                                    style={{
                                        animationDelay: `${index * 200}ms`,
                                    }}
                                >
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className={`
                                            relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl 
                                            rounded-3xl p-8 border border-white/20 
                                            transition-all duration-500 
                                            hover:border-white/40 hover:shadow-2xl hover:${social.glow}
                                            transform hover:rotate-y-12 hover:rotate-x-12
                                            perspective-1000
                                        `}>
                                            {/* Glow effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-all duration-500`}></div>
                                            
                                            {/* Icon with 3D effect */}
                                            <div className={`
                                                relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${social.color} mb-6 
                                                group-hover:scale-125 group-hover:rotate-12 transition-all duration-500
                                                shadow-lg group-hover:shadow-2xl
                                            `}>
                                                <IconComponent className="text-white relative z-10" size={32} />
                                                <div className="absolute inset-0 bg-white/20 rounded-2xl group-hover:animate-ping"></div>
                                            </div>
                                            
                                            <h3 className="text-white font-bold text-2xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                                                {social.handle}
                                            </h3>
                                            <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
                                                Follow us on {social.name}
                                            </p>
                                            
                                            {/* Animated border */}
                                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-3xl animate-pulse`}></div>
                                                <div className="absolute inset-1 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl"></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Custom CSS for additional animations */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes glow {
                    0%, 100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
                    50% { text-shadow: 0 0 40px rgba(255, 255, 255, 0.8); }
                }
                
                .animate-gradient-x {
                    animation: gradient-x 4s ease infinite;
                }
                
                .animate-float {
                    animation: float linear infinite;
                }
                
                .animate-glow {
                    animation: glow 3s ease-in-out infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                
                .perspective-1000 {
                    perspective: 1000px;
                }
                
                .rotate-y-12 {
                    transform: rotateY(12deg);
                }
                
                .rotate-x-12 {
                    transform: rotateX(12deg);
                }
            `}</style>
        </div>
    );
};

export default AarmationLanding;