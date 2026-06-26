import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialMedia() {

    return (
        <div >
            <div className='flex gap-4 relative bg-transparent p-2 rounded-md shadow-md'>
                <a className='hover:text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300' href="https://www.linkedin.com/in/fassou-mathias-kolie-2950a7155/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a className='hover:text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300' href="https://github.com/Kolie11" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a className='hover:text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300' href="https://x.com/KolieMathias" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
            </div>
        </div>
    )
}

export default SocialMedia