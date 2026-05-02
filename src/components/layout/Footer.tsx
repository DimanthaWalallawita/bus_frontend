import React from 'react'
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from '../../assets/Logo.png';
import playstore from '../../assets/playstore.png'
import ios from '../../assets/ios.png'

const Footer: React.FC = () => {
  return (
    <>
      {/* ==========================================Top footer section ==========================================*/}
      <div className='flex flex-col md:flex-row items-center justify-center bg-[#01392C]'>
        <div className='flex-1 p-5 md:p-14 flex md:flex-col flex-row items-center md:items-start'>
          <div>
            <img src={Logo} alt="Logo" className='h-20' />
          </div>

          <div className='md:mt-10 ml-10'>
            <h1 className='text-[24px] font-bold text-white'>GENERAL</h1>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Home</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Contact Us</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>About Us</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Advertisements</h3>
          </div>
        </div>

        <div className='flex-1 p-5 md:p-14 flex flex-col items-center md:items-start md:border-x-2 border-[#4B7269]'>
          <div className='ml-10 md:mt-0 mt-3'>
            <h1 className='text-[24px] font-bold text-white'>HELPFUL RESOURCES</h1>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>FAQs</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Booking related FAQs</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Booking Guide</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Payment Guide</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Reschedule Guide</h3>
          </div>

          <div className='ml-10 mt-10'>
            <h1 className='text-[24px] font-bold text-white'>FOLLOW US ON</h1>
            <div className='flex md:ml-16 mt-3 gap-8 text-xl'>
              <FaFacebook className='text-white text-3xl' />
              <FaInstagram className='text-white text-3xl' />
              <FaSquareXTwitter className='text-white text-3xl' />
              <FaGoogle className='text-white text-3xl' />
            </div>
          </div>
        </div>

        <div className='flex-1 p-5 md:p-14 flex flex-col items-center md:items-start'>
          <div className='ml-16 md:ml-10'>
            <h1 className='text-[24px] font-bold text-white'>CONTACT US</h1>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Phone: +1 234 567 890</h3>
            <h3 className='text-[18px] md:ml-10 font-semibold text-[#A2A2A2] cursor-pointer'>Email: walallawitad@gmail.com</h3>
          </div>

          <div className='ml-10 mt-10'>
            <h1 className='text-[24px] font-bold text-white'>OUR APPLICATIONS</h1>

            <div className='mt-2 flex gap-5 md:ml-3'>
              <img src={playstore} alt="Play Store" className='h-10 bg-[#faf1dc] rounded-lg' />
              <img src={ios} alt="iOS" className='h-10 bg-[#faf1dc] rounded-lg' />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================Bottom footer section ========================================*/}
      <footer className="bg-[#4B7269] text-white p-4 text-center w-full">
        © 2026 TypeX Productions. All rights reserved.
      </footer>
    </>
  )
}

export default Footer