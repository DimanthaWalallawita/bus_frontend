import React from 'react'
import BusJourneyAnimation from '../components/layout/Animation/BusJourneyAnimation'
import { MapPin, Search, ArrowRight, Clock, Navigation } from 'lucide-react'

interface BusRoute {
    id: number
    operator: string
    routeType: string
    from: string
    to: string
    departureTime: string
    arrivalTime: string
    departureDate: string
    arrivalDate: string
    price: number
}

const buses: BusRoute[] = [
    {
        id: 1,
        operator: 'NCG',
        routeType: 'Super Luxury',
        from: 'Kandy',
        to: 'Jaffna',
        departureTime: '8.45 PM',
        arrivalTime: '4.45 AM',
        departureDate: 'Wed, 2026-05-13',
        arrivalDate: 'Thu, 2026-05-14',
        price: 1500,
    },
    {
        id: 2,
        operator: 'NCG',
        routeType: 'Super Luxury',
        from: 'Kandy',
        to: 'Jaffna',
        departureTime: '9.30 PM',
        arrivalTime: '5.30 AM',
        departureDate: 'Wed, 2026-05-13',
        arrivalDate: 'Thu, 2026-05-14',
        price: 1650,
    },
]

const BusCard: React.FC<BusRoute> = ({
    operator,
    routeType,
    from,
    to,
    departureTime,
    arrivalTime,
    departureDate,
    arrivalDate,
    price,
}) => {
    return (
        <div className='bg-[#2c3b38d5] border border-white/10 rounded-2xl w-full overflow-hidden hover:border-[#03B188]/60 transition-colors duration-200'>
            {/* Header */}
            <div className='flex flex-wrap items-center justify-between gap-3 p-4 border-b border-white/10'>
                <div className='flex flex-wrap items-center gap-2 sm:gap-3'>
                    <h1 className='text-lg sm:text-xl text-white poppins-bold'>{from} - {to}</h1>
                    <span className='text-xs sm:text-sm text-[#03B188] poppins-bold bg-[#03B188]/10 px-2 py-0.5 rounded-full'>
                        {routeType}
                    </span>
                </div>

                <div className='flex gap-2'>
                    <button className='bg-white/5 p-1.5 border border-[#03B188]/60 text-white text-xs sm:text-sm rounded-2xl px-4 poppins-semibold hover:bg-[#03B188] hover:text-black hover:scale-105 duration-150 cursor-pointer'>
                        Details
                    </button>
                    <button className='bg-white/5 p-1.5 border border-[#03B188]/60 text-white text-xs sm:text-sm rounded-2xl px-4 poppins-semibold hover:bg-[#03B188] hover:text-black hover:scale-105 duration-150 cursor-pointer'>
                        Schedules
                    </button>
                </div>
            </div>

            {/* Body */}
            <div className='w-full grid grid-cols-1 md:grid-cols-[110px_1fr_170px]'>
                <div className='h-20 md:h-36 flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10'>
                    <h1 className='text-white text-2xl md:text-4xl font-bold poppins-bold-italic border-2 border-white/70 p-2 md:p-3 rounded-2xl'>
                        {operator}
                    </h1>
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-between gap-4 p-4 md:p-0 border-b md:border-b-0 md:border-r border-white/10'>
                    <div className='flex-1 flex flex-col justify-center items-center gap-0.5'>
                        <h3 className='uppercase poppins-semibold text-xs md:text-sm text-gray-400'>Departure</h3>
                        <h1 className='poppins-bold text-2xl md:text-3xl text-[#03B188]'>{departureTime}</h1>
                        <h2 className='poppins-bold text-lg md:text-xl text-white'>{from}</h2>
                        <h2 className='poppins-semibold text-xs md:text-sm text-gray-300'>{departureDate}</h2>
                    </div>

                    <div className='hidden sm:flex flex-1 h-24 md:h-full items-center justify-center'>
                        <BusJourneyAnimation />
                    </div>
                    <ArrowRight className='sm:hidden w-6 h-6 text-[#03B188]' />

                    <div className='flex-1 flex flex-col justify-center items-center gap-0.5'>
                        <h3 className='uppercase poppins-semibold text-xs md:text-sm text-gray-400'>Arrival</h3>
                        <h1 className='poppins-bold text-2xl md:text-3xl text-[#03B188]'>{arrivalTime}</h1>
                        <h2 className='poppins-bold text-lg md:text-xl text-white'>{to}</h2>
                        <h2 className='poppins-semibold text-xs md:text-sm text-gray-300'>{arrivalDate}</h2>
                    </div>
                </div>

                <div className='h-auto md:h-36 flex items-center justify-center flex-col gap-3 p-4'>
                    <h1 className='text-2xl md:text-3xl font-bold poppins-bold text-white'>
                        {price.toLocaleString()} <span className='text-base md:text-xl'>LKR</span>
                    </h1>
                    <button className='w-full md:w-auto bg-[#03B188] hover:bg-[#029a7a] text-white font-bold py-2 px-6 rounded-lg cursor-pointer transition-colors'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

const Explore: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 p-4 lg:p-5'>
            {/* Map panel */}
            <div className='w-full lg:w-[340px] xl:w-[400px] shrink-0'>
                <div className='relative h-64 sm:h-80 lg:h-full lg:min-h-[600px] lg:sticky lg:top-5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#1c2624]'>
                    {/* Route info overlay */}
                    <div className='absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-4 pointer-events-none'>
                        <div className='flex items-center gap-2 text-white'>
                            <Navigation className='w-4 h-4 text-[#03B188]' />
                            <span className='poppins-semibold text-sm'>Kandy</span>
                            <span className='text-gray-400'>→</span>
                            <span className='poppins-semibold text-sm'>Jaffna</span>
                        </div>
                        <div className='flex items-center gap-1.5 text-gray-300 text-xs mt-1'>
                            <Clock className='w-3 h-3' />
                            <span>~8h journey · 400 km</span>
                        </div>
                    </div>

                    <iframe
                        title='Route map'
                        className='w-full h-full grayscale-[20%] contrast-[1.1]'
                        loading='lazy'
                        src='https://www.openstreetmap.org/export/embed.html?bbox=79.6%2C5.9%2C81.2%2C9.9&layer=mapnik&marker=7.2906%2C80.6337'
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </div>

            {/* Content */}
            <div className='flex-1 flex flex-col gap-8 sm:gap-10 items-center min-w-0'>
                <h1 className='text-white text-3xl sm:text-4xl prata-regular text-center'>Select your journey</h1>

                <div className='w-full p-2 rounded-[28px] sm:rounded-4xl border-2 border-white/20'>
                    <div className='bg-white px-4 sm:px-5 py-6 sm:py-8 rounded-3xl flex flex-col sm:flex-row flex-wrap gap-3'>
                        <div className='relative flex-1 min-w-[140px]'>
                            <MapPin className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none' />
                            <input
                                type='text'
                                placeholder='From'
                                className='w-full pl-9 p-2 rounded-lg border border-gray-200 bg-[#2c3b38d5] text-white poppins-semibold focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent'
                            />
                        </div>
                        <div className='relative flex-1 min-w-[140px]'>
                            <MapPin className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300 pointer-events-none' />
                            <input
                                type='text'
                                placeholder='To'
                                className='w-full pl-9 p-2 rounded-lg border border-gray-200 bg-[#2c3b38d5] text-white poppins-semibold focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent'
                            />
                        </div>
                        <input
                            type='date'
                            className='flex-1 min-w-[140px] p-2 rounded-lg border border-gray-200 bg-[#2c3b38d5] text-white poppins-semibold focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent'
                        />

                        <button className='flex items-center justify-center gap-2 bg-[#03B188] hover:bg-[#029a7a] text-white font-bold py-2 px-6 rounded-lg cursor-pointer transition-colors w-full sm:w-auto'>
                            <Search className='w-4 h-4' />
                            Search
                        </button>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-5'>
                    {buses.map((bus) => (
                        <BusCard key={bus.id} {...bus} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Explore