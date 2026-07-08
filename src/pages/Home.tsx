import React from 'react'
import banner from '../assets/city-bus-autumn-forest-road-vehicle-motion.webp'
import { IoFingerPrint } from "react-icons/io5";
import playstore from '../assets/playstore.png'
import ios from '../assets/ios.png'

const Home: React.FC = () => {
  return (
    <div>
      <div className="h-fit p-4 md:p-0 md:h-[80vh] bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${banner})` }}>
        <h1 className="text-2xl md:text-5xl font-bold text-white text-center prata-regular leading-10 md:leading-17.5">
          BOOK NOW <br /> BEST WAY TO TRAVEL IN SRI LANKA
        </h1>

        <div className='bg-[#ffffff41] py-8 px-2 md:px-32 mt-8 rounded-md md:rounded-full shadow-lg gap-3 md:gap-6 flex md:flex-row flex-col items-center'>
          <input type="text" placeholder="To: " className="outline-none bg-white p-2 rounded-md md:rounded-2xl w-62.5 h-10" />
          <input type="text" placeholder="From: " className="outline-none bg-white p-2 rounded-md md:rounded-2xl w-62.5 h-10" />
          <input type="date" className="outline-none bg-white p-2 rounded-md md:rounded-2xl w-62.5 h-10" />
          <button className='bg-[#03B188] text-white px-4 py-2 rounded-lg hover:bg-[#029a7a] h-10'>SEARCH NOW</button>
        </div>

        <div className='w-[60%] hidden md:flex justify-around h-60 gap-10 absolute -bottom-32'>
          <div className='flex-1 h-full bg-[#faf1dc] rounded-4xl flex justify-center items-center flex-col gap-4'>
            <img src={playstore} alt="Play Store" className='h-14' />
            <img src={ios} alt="iOS" className='h-14' />
          </div>

          <div className='flex-1 h-full bg-[#faf1dc] rounded-4xl flex justify-center items-center flex-col gap-4'>
            <IoFingerPrint className='text-8xl'/>
            <h1 className='text-center prata-regular text-3xl leading-10'>SECURE <br /> PAYMENTS</h1>
          </div>

          <div className='flex-1 h-full bg-[#faf1dc] rounded-4xl flex justify-center items-center flex-col gap-4'>
            <h1 className='text-center prata-regular text-3xl leading-10'>200+ <br /> CUSTOMERS</h1>
          </div>
        </div>
      </div>

      <div className='w-full md:h-56 my-4'>
        <div className='w-full md:hidden flex-col-reverse justify-center items-center flex md:h-60 gap-3'>
          <div className=' w-[60%] h-56 md:h-full bg-[#faf1dc] rounded-4xl flex justify-center items-center flex-col gap-4'>
            <img src={playstore} alt="Play Store" className='h-10' />
            <img src={ios} alt="iOS" className='h-10' />
          </div>

          <div className=' w-[60%] h-56 md:h-full bg-[#faf1dc] rounded-4xl flex justify-center items-center flex-col gap-4'>
            <IoFingerPrint className='text-8xl'/>
            <h1 className='text-center prata-regular text-2xl leading-10'>SECURE <br /> PAYMENTS</h1>
          </div>

          <div className=' w-[60%] h-56 md:h-full bg-[#faf1dc] rounded-4xl flex justify-center items-center flex-col gap-4'>
            <h1 className='text-center prata-regular text-2xl leading-10'>200+ <br /> CUSTOMERS</h1>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home