import React from 'react'
import { Shrikhand } from 'next/font/google'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shrikhand",
});

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 pb-8 lg:pb-0 gap-8 lg:gap-12">
      {/* Left Side - Content */}
      <div className={`text-center lg:text-left order-2 lg:order-1 max-w-lg lg:max-w-none ${shrikhand.className}`}>
        {/* Greeting */}
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1 sm:mb-2 text-[#FBF8EF]">
          Hi There, I'm
        </h3>
        
        {/* Main Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold italic text-[#FBF8EF] leading-tight">
          Rowel
        </h1>
        
        {/* Role Description */}
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 sm:mt-3 lg:mt-4 font-bold text-[#FBF8EF] leading-relaxed">
          <p>UI/UX DESIGNER</p>
          <p>& <span className="uppercase">Software Developer</span></p>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center  lg:justify-start gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5 lg:mt-6 text-[#06923E]">
          <a 
            href="https://www.facebook.com/RowelAngeloEdianel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xl sm:text-3xl md:text-4xl hover:scale-110 hover:text-[#04742f] transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://www.linkedin.com/in/rowel-angelo-edianel-500b202b5/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl md:text-4xl hover:scale-110 hover:text-[#04742f] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl sm:text-3xl md:text-4xl hover:scale-110 hover:text-[#04742f] transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      
      {/* Right Side - Profile Image */}
      <div className="order-1 lg:order-2 flex-shrink-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <img 
          src="/img/Picture.svg" 
          alt="Rowel - UI/UX Designer & Software Developer" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

export default Hero