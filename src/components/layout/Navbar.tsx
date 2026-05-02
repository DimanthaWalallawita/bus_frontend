import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaGoogle, FaBars, FaTimes } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from '../../assets/Logo.png';
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* ============================== Top Header Section ==================================== */}
      <div className='flex flex-col md:flex-row justify-between items-center bg-[#03B188] px-20 py-1'>
        <h3 className='font-bold text-sm md:text-base hidden md:flex'>
          Contact us for the help!
        </h3>

        <div className='flex gap-3 text-lg md:text-xl'>
          <FaFacebook />
          <FaInstagram />
          <FaSquareXTwitter />
          <FaGoogle />
        </div>
      </div>

      {/* ============================== Main Header Section ==================================== */}
      <div className='flex justify-between items-center px-4 md:px-52 py-3 bg-black'>
        <motion.img src={Logo} alt="Logo" className='h-10' initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}/>

        <div className='hidden md:flex items-center gap-8'>
          <ul className='flex gap-5 text-white font-semibold'>
            <li className='text-white font-semibold poppins-semibold'>EXPLORE</li>
            <li className='text-white font-semibold poppins-semibold'>CONTACT</li>
            <li className='text-white font-semibold poppins-semibold'>ABOUT</li>
            <li className='text-white font-semibold poppins-semibold'>FAQS</li>
          </ul>

          <button className='bg-[#03B188] text-black text-xl font-normal px-8 h-8 rounded-3xl hover:bg-[#029a7a] flex items-center poppins-light'>
            Login
          </button>
        </div>

        <div className='md:hidden text-white text-2xl cursor-pointer'>
          {open ? (
            <FaTimes onClick={() => setOpen(false)} />
          ) : (
            <FaBars onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {open && (
        <div className='md:hidden bg-black text-white flex flex-col items-center gap-5 py-5'>
          <ul className='flex flex-col gap-4 text-center'>
            <li>EXPLORE</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
            <li>FAQS</li>
          </ul>

          <button className='bg-[#03B188] text-black px-6 py-2 rounded-3xl'>
            Login
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar