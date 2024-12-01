import React from 'react'

import { FaGithub, FaLinkedinIn, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6"

import logo from "../assets/Logos/vsk-soft-dev.PNG"
const Navbar = () => {
  return (
    <nav className='flex items-ceter justify-between'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
            <img src={logo} className='mx-1' width={130} height={60} alt="Logo"/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/vaibhav-kandharkar-770b36228" target='_black' rel="noopener noreferrer" aria-label="Linkdin">
          <FaLinkedinIn/>
          </a>
          <a href="https://github.com/Vaibhavkandharkar" target='_black' rel="noopener noreferrer" aria-label="github">
          <FaGithub/>
          </a>
          <a href="https://www.instagram.com/vaibhav.sk_8/profilecard/?igsh=MWNqMjI0cnJud203Zw==" target='_black' rel="noopener noreferrer" aria-label="instagram">
          <FaSquareInstagram/>
          </a>
          <a href="https://x.com/Vaibhav_sk8?t=1JsvObgwwHoyD0RWBMVgmQ&s=09" target='_black' rel="noopener noreferrer" aria-label="Twitter">
            <FaSquareXTwitter/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar