import React, { useState, useEffect } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Shrikhand } from 'next/font/google';


const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
})

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ResumeCV.pdf';
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 flex justify-center items-center">
      <div className={`w-full max-w-5xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Simple header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 ${shrikhand.className}`}>
            Resume
          </h1>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={downloadResume}
            className="group px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </div>
          </button>
          
          <button className="group px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View Online
            </div>
          </button>
        </div>

        {/* Resume container */}
        <div 
          className="relative group"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Clean container with subtle shadow */}
          <div className="relative bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl transition-all duration-300 hover:shadow-3xl">
            {/* PDF viewer */}
            <div className="relative w-full" style={{ paddingTop: '125%' }}>
              <iframe
                src="/ResumeCV.pdf"
                title="Resume PDF"
                className="absolute top-0 left-0 w-full h-full border-none rounded-lg shadow-lg transition-all duration-300"
                style={{
                  filter: hovering ? 'brightness(1.05)' : 'brightness(1)'
                }}
              />
            </div>

            {/* Bottom info bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">
              <div className="flex items-center mb-2 sm:mb-0">
                <FileText className="w-4 h-4 mr-2 text-gray-300" />
                <span>PDF Document</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;