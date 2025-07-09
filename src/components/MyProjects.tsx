import React from 'react'
import { Shrikhand, Rubik } from 'next/font/google'
import projects from '@/data/projectsList';

const shrikhand = Shrikhand({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-shrikhand",
});

const rubik = Rubik({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-rubik",
});

const MyProjects = () => {
    return (
        <div className='min-h-screen bg-[#363636] pb-5'>
            {/* Section Title */}
            <h1 className={`text-center text-[#FBF8EF] m-2 pt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${shrikhand.className}`}>
                Projects
            </h1>

            {/* List Of My Project Create */}
            <div className='px-4 sm:px-8 md:px-12 lg:px-20'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='flex flex-col lg:flex-row justify-center items-center lg:items-start mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-6 bg-[#333333] mx-auto max-w-7xl p-4 sm:p-6 md:p-8 shadow-md rounded-lg'
                    >
                        {/* Images */}
                        <div className='flex-shrink-0 w-full lg:w-auto flex justify-center'>
                            <img
                                src={project.image}
                                alt={project.alt}
                                className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain'
                            />
                        </div>

                        {/* Contents */}
                        <div className='flex-1 w-full lg:w-auto'>
                            <div className='text-center lg:text-left'>
                                {/* Title */}
                                <h1 className={`text-[#FBF8EF] pt-4 lg:pt-10 text-2xl sm:text-3xl lg:text-4xl ${shrikhand.className}`}>
                                    {project.title}
                                </h1>

                                {/* Short Description */}
                                <p className={`text-[#FBF8EF] pt-3 sm:pt-4 text-base sm:text-lg leading-relaxed ${rubik.className}`}>
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <h2 className={`text-[#FBF8EF] pt-6 sm:pt-8 lg:pt-10 text-xl sm:text-2xl ${shrikhand.className}`}>
                                    Tech Stack:
                                </h2>

                                <div className='flex justify-center lg:justify-start flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4'>
                                    {project.techStack.map((tech, i) => (
                                        <a
                                            key={i}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='hover:scale-110 transition-transform duration-200'
                                        >
                                            <img
                                                src={tech.icon}
                                                alt={`Tech Icon ${i + 1}`}
                                                className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain'
                                            />

                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Role */}
                            <div className={`text-center lg:text-right mt-6 sm:mt-8 lg:mt-10 text-white text-lg sm:text-xl lg:text-2xl ${shrikhand.className}`}>
                                <h3>Role: {project.role}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyProjects;