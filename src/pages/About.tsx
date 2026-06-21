import React from 'react'
import { IoShieldCheckmark, IoTime, IoLocationSharp, IoPeople } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";

const stats = [
  { value: '200+', label: 'Happy Customers' },
  { value: '50+', label: 'Routes Covered' },
  { value: '10+', label: 'Years of Service' },
  { value: '99%', label: 'On-Time Rate' },
]

const values = [
  {
    icon: <IoShieldCheckmark className="text-4xl text-[#03B188]" />,
    title: 'SAFE & SECURE',
    desc: 'Your safety is our top priority. All our buses are regularly inspected and our payment systems are fully encrypted.',
  },
  {
    icon: <IoTime className="text-4xl text-[#03B188]" />,
    title: 'ALWAYS ON TIME',
    desc: 'We respect your time. Our fleet is tracked in real-time to ensure punctual arrivals and departures across Sri Lanka.',
  },
  {
    icon: <IoLocationSharp className="text-4xl text-[#03B188]" />,
    title: 'ISLAND-WIDE COVERAGE',
    desc: 'From Colombo to Jaffna, Kandy to Galle — we connect every corner of the island with comfort and reliability.',
  },
  {
    icon: <MdSupportAgent className="text-4xl text-[#03B188]" />,
    title: '24/7 SUPPORT',
    desc: 'Our customer service team is available around the clock to assist you with bookings, changes, and queries.',
  },
]

const team = [
  { name: 'Kamal Perera', role: 'Founder & CEO', initial: 'K' },
  { name: 'Nimasha Silva', role: 'Head of Operations', initial: 'N' },
  { name: 'Ruwan Fernando', role: 'Lead Developer', initial: 'R' },
]

const About: React.FC = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="relative bg-[#03B188] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <FaBusAlt className="text-[32rem] text-white absolute -right-24 -bottom-24 rotate-[-8deg]" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-4">
          <span className="text-white/70 uppercase tracking-widest text-sm mb-4 font-medium">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white prata-regular leading-tight">
            TRAVEL BETTER,<br />ACROSS SRI LANKA
          </h1>
          <p className="mt-6 text-white/80 max-w-xl text-base md:text-lg leading-relaxed">
            We are Sri Lanka's most trusted bus booking platform — making intercity travel simple, affordable, and comfortable for everyone.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#faf1dc] py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#03B188] prata-regular">{s.value}</p>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <span className="text-[#03B188] uppercase tracking-widest text-sm font-medium">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 prata-regular mt-3 mb-6 leading-snug">
            BUILT FOR THE<br />ROADS OF LANKA
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Founded over a decade ago, our platform was born out of a simple frustration — booking a bus in Sri Lanka was unnecessarily complicated. Long queues, uncertain schedules, and no reliable way to plan ahead.
          </p>
          <p className="text-gray-500 leading-relaxed">
            Today, we've transformed that experience. With just a few taps, thousands of travellers book their seats, compare routes, and travel with confidence every single day.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-[#faf1dc] rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-2 col-span-2">
            <IoPeople className="text-5xl text-[#03B188]" />
            <p className="prata-regular text-2xl font-bold text-gray-800">200+ Customers</p>
            <p className="text-gray-400 text-sm">and growing every month</p>
          </div>
          <div className="bg-[#03B188] rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-2">
            <p className="prata-regular text-3xl font-bold text-white">50+</p>
            <p className="text-white/80 text-sm uppercase tracking-wide">Routes</p>
          </div>
          <div className="bg-gray-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center gap-2">
            <p className="prata-regular text-3xl font-bold text-white">10+</p>
            <p className="text-white/60 text-sm uppercase tracking-wide">Years</p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#faf1dc] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#03B188] uppercase tracking-widest text-sm font-medium">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 prata-regular mt-3">OUR VALUES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-3xl p-8 flex flex-col gap-4 shadow-sm">
                {v.icon}
                <h3 className="font-bold text-gray-800 prata-regular text-xl">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <span className="text-[#03B188] uppercase tracking-widest text-sm font-medium">The People Behind It</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 prata-regular mt-3">MEET THE TEAM</h2>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#03B188] flex items-center justify-center text-white text-4xl font-bold prata-regular shadow-md">
                {member.initial}
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-800 text-lg">{member.name}</p>
                <p className="text-[#03B188] text-sm uppercase tracking-wide mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#03B188] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white prata-regular mb-4">READY TO TRAVEL?</h2>
        <p className="text-white/80 mb-8 text-sm md:text-base">Book your seat today and experience the easiest way to travel across Sri Lanka.</p>
        <button className="bg-white text-[#03B188] font-bold px-8 py-3 rounded-full hover:bg-[#faf1dc] transition-colors text-sm uppercase tracking-widest">
          Book Now
        </button>
      </div>

    </div>
  )
}

export default About
