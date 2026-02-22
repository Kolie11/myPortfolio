import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function SocialMedia() {

    return (
        <div >
            <div className='flex gap-4 relative bg-white p-2 rounded-md shadow-md'>
                <a className='hover:text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300' href="linkedin.com"><FaLinkedin /></a>
                <a className='hover:text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300' href="github.com"><FaGithub /></a>
                <a className='hover:text-2xl hover:text-blue-500 hover:scale-110 transition-all duration-300' href="twitter.com"><FaSquareXTwitter /></a>
            </div>
        </div>
    )
}

export default SocialMedia