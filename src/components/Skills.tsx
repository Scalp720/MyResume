import React, { useEffect } from 'react'
import { Shrikhand } from 'next/font/google'
import AOS from 'aos'
import 'aos/dist/aos.css'

// React Icons
import { SiAdobephotoshop } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaJava, FaPhp, FaPython, FaReact, FaBootstrap, FaJs, FaFigma, } from 'react-icons/fa'
import { SiDotnet, SiMysql, SiTailwindcss, SiIonic,  } from 'react-icons/si'
import { DiRedhat } from "react-icons/di";

const shrikhand = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
})

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <SiDotnet />, name: '.NET' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <TbBrandCSharp  />, name: 'C#' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiAdobephotoshop  />, name: 'Photoshop' },
  { icon: <SiIonic />, name: 'Ionic' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaFigma />, name: 'Figma' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <DiRedhat />, name: 'SQL Server' },
]

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div className='min-h-screen bg-[#202020] px-4 py-16'>
      {/* Title */}
      <h1
        className={`text-center text-[#FBF8EF] pt-10 text-6xl mb-12 ${shrikhand.className}`}
        data-aos="fade-down"
      >
        Skills
      </h1>

      {/* Skill Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='bg-[#333333] flex justify-center items-center p-10 rounded shadow-md hover:scale-105 transition-transform duration-300'
            data-aos='zoom-in'
            title={skill.name}
          >
            <div className='text-green-500 text-5xl'>
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
