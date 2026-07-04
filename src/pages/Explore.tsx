import React from 'react'
import BusJourneyAnimation from '../components/layout/Animation/BusJourneyAnimation'

const Explore: React.FC = () => {
    return (
        <div className='flex'>
            <div className='bg-amber-400 flex-1'>

            </div>

            <div className='flex-2 p-5 flex flex-col gap-14 mt-5 mb-5 items-center'>
                <h1 className='text-white text-4xl prata-regular'>Select your journey</h1>

                <div className='p-2 rounded-4xl border-2 border-white'>
                    <div className='bg-white px-5 py-8 rounded-3xl'>
                        <input type="text" placeholder='From' className='p-2 rounded-lg border border-amber-50 bg-[#2c3b38d5] text-white poppins-semibold focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent' />
                        <input type="text" placeholder='To' className='p-2 rounded-lg border border-amber-50 bg-[#2c3b38d5] text-white poppins-semibold focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent ml-5' />
                        <input type="date" className='p-2 rounded-lg border border-amber-50 bg-[#2c3b38d5] text-white poppins-semibold focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent ml-5' />

                        <button className='bg-[#03B188] hover:bg-[#029a7a] text-white font-bold py-2 px-4 rounded cursor-pointer ml-5'>
                            Search
                        </button>
                    </div>

                </div>

                <div className='bg-[#2c3b38d5] border border-amber-50 rounded-xl w-full'>
                    <div className='flex p-2 gap-5 items-center justify-between border-b border-amber-50'>
                        <div className='flex p-2 gap-5 items-center justify-start'>
                            <h1 className='text-xl text-white poppins-bold'>Kandy - Jaffna</h1>
                            <h3 className='text-sm text-[#03B188] poppins-bold'>Super Luxury</h3>
                        </div>

                        <div className='flex gap-2'>
                            <button className='bg-[#5c5c5c6b] p-1 border-2 text-white border-amber-600 text-sm rounded-2xl px-4 poppins-semibold hover:bg-amber-600 hover:scale-105 duration-150 hover:text-black'>Details</button>
                            <button className='bg-[#5c5c5c6b] p-1 border-2 text-white border-amber-600 text-sm rounded-2xl px-4 poppins-semibold hover:bg-amber-600 hover:scale-105 duration-150 hover:text-black'>Schedules</button>
                        </div>
                    </div>

                    <div className='w-full flex'>
                        <div className='flex-1 h-36 flex items-center justify-center'>
                            <h1 className='text-white text-5xl font-bold poppins-bold-italic border-2 border-white p-3 rounded-2xl'>NCG</h1>
                        </div>

                        <div className='flex flex-4 h-36 border-l border-r border-amber-50'>
                            <div className='flex-1 h-full flex flex-col justify-center items-center gap-0.5 ml-5'>
                                <h3 className='uppercase poppins-semibold text-md text-gray-400'>Departure</h3>
                                <h1 className='poppins-bold text-3xl text-[#03B188]'>8.45 PM</h1>
                                <h2 className='poppins-bold text-xl text-white'>Kandy</h2>
                                <h2 className='poppins-semibold text-sm text-gray-200'>Wed, 2026-05-13</h2>
                            </div>

                            <div className='flex-2 h-full'>
                                <BusJourneyAnimation />
                            </div>

                            <div className='flex-1 h-full flex flex-col justify-center items-center gap-0.5 mr-5'>
                                <h3 className='uppercase poppins-semibold text-md text-gray-400'>Arrival</h3>
                                <h1 className='poppins-bold text-3xl text-[#03B188]'>4.45 AM</h1>
                                <h2 className='poppins-bold text-xl text-white'>Jaffna</h2>
                                <h2 className='poppins-semibold text-sm text-gray-200'>Thu, 2026-05-14</h2>
                            </div>
                        </div>

                        <div className='flex-1 h-36 flex items-center justify-center flex-col gap-7'>
                            <h1 className='text-3xl font-bold poppins-bold text-white'>1,500 <span className='text-xl'>LKR</span></h1>

                            <button className='bg-[#03B188] hover:bg-[#029a7a] text-white font-bold py-2 px-4 rounded cursor-pointer'>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className='bg-[#2c3b38d5] border border-amber-50 rounded-xl w-full'>
                    <div className='flex p-2 gap-5 items-center justify-between border-b border-amber-50'>
                        <div className='flex p-2 gap-5 items-center justify-start'>
                            <h1 className='text-xl text-white poppins-bold'>Kandy - Jaffna</h1>
                            <h3 className='text-sm text-[#03B188] poppins-bold'>Super Luxury</h3>
                        </div>

                        <div className='flex gap-2'>
                            <button className='bg-[#5c5c5c6b] p-1 border-2 text-white border-amber-600 text-sm rounded-2xl px-4 poppins-semibold hover:bg-amber-600 hover:scale-105 duration-150 hover:text-black'>Details</button>
                            <button className='bg-[#5c5c5c6b] p-1 border-2 text-white border-amber-600 text-sm rounded-2xl px-4 poppins-semibold hover:bg-amber-600 hover:scale-105 duration-150 hover:text-black'>Schedules</button>
                        </div>
                    </div>

                    <div className='w-full flex'>
                        <div className='flex-1 h-36 flex items-center justify-center'>
                            <h1 className='text-white text-5xl font-bold poppins-bold-italic border-2 border-white p-3 rounded-2xl'>NCG</h1>
                        </div>

                        <div className='flex flex-4 h-36 border-l border-r border-amber-50'>
                            <div className='flex-1 h-full flex flex-col justify-center items-center gap-0.5 ml-5'>
                                <h3 className='uppercase poppins-semibold text-md text-gray-400'>Departure</h3>
                                <h1 className='poppins-bold text-3xl text-[#03B188]'>8.45 PM</h1>
                                <h2 className='poppins-bold text-xl text-white'>Kandy</h2>
                                <h2 className='poppins-semibold text-sm text-gray-200'>Wed, 2026-05-13</h2>
                            </div>

                            <div className='flex-2 h-full'>
                                <BusJourneyAnimation />
                            </div>

                            <div className='flex-1 h-full flex flex-col justify-center items-center gap-0.5 mr-5'>
                                <h3 className='uppercase poppins-semibold text-md text-gray-400'>Arrival</h3>
                                <h1 className='poppins-bold text-3xl text-[#03B188]'>4.45 AM</h1>
                                <h2 className='poppins-bold text-xl text-white'>Jaffna</h2>
                                <h2 className='poppins-semibold text-sm text-gray-200'>Thu, 2026-05-14</h2>
                            </div>
                        </div>

                        <div className='flex-1 h-36 flex items-center justify-center flex-col gap-7'>
                            <h1 className='text-3xl font-bold poppins-bold text-white'>1,500 <span className='text-xl'>LKR</span></h1>

                            <button className='bg-[#03B188] hover:bg-[#029a7a] text-white font-bold py-2 px-4 rounded cursor-pointer'>
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore