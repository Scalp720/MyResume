import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Share } from 'next/font/google'

const share = Share({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-share',
})


const Footers = () => {
    return (
        <div className={`flex justify-between items-center text-white py-5 px-6 ${share.className}`}>
            {/* Logo */}
            <img className="w-20 h-10" src="/img/logoMobile.png" alt="Logo" />
            {/* Credits */}
            <h1>All Rights Reserved @ 2025</h1>
            {/* Contact Information */}
            <div className="flex flex-col inline-block sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center m-2 space-x-2 text-green-400">
                    <MdEmail className="w-4 h-4" />
                    <span className="text-sm text-white">angeloedianel@gmail.com</span>
                </div>
                <div className="flex items-center m-2 space-x-2 text-green-400">
                    <FaPhoneAlt className="w-4 h-4" />
                    <span className="text-sm text-white">+639690276533</span>
                </div>
            </div>
        </div>
    )
}

export default Footers
