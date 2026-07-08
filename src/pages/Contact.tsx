import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import banner from '../assets/two-individuals-carrying-backpacks-standing-hill-gazing-lake.webp'

const contactStops = [
  {
    icon: Mail,
    label: "Email us",
    value: "smartbussrilank@gmail.com",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "(+94)70-33555444",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "42 Temple Rd, Kandy, Sri Lanka",
  },
];

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Frontend only — no submission logic wired up.
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#F2F4F3] py-12 sm:py-16 px-4 sm:px-6 font-sans justify-center bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
      <div className="max-w-5xl p-5 mx-auto rounded-3xl bg-[#ffffffa8]">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#03B188] bg-[#03B188]/10 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Let&apos;s get you on board
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-md mx-auto">
            Questions about a booking, a route, or anything else? We&apos;re
            just a stop away.
          </p>
        </div>

        {/* Signpost contact stops */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14 sm:mb-16">
          {contactStops.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm border border-gray-100 pt-0 pb-6 px-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* signpost pole */}
              <span className="w-[3px] h-6 bg-gray-200 rounded-full" />
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#03B188] text-white -mt-1 shadow-md shadow-[#03B188]/20">
                <Icon className="w-5 h-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-black">
                {label}
              </h3>
              <p className="mt-1 text-sm text-gray-500 break-words">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.2)] p-6 sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#03B188]/10 text-[#03B188]">
                <CheckCircle2 className="w-7 h-7" strokeWidth={2} />
              </span>
              <h2 className="mt-5 text-xl font-bold text-black">
                Message sent!
              </h2>
              <p className="mt-2 text-sm text-gray-500 max-w-xs">
                Thanks for reaching out — our team will get back to you
                within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-6 text-sm font-semibold text-[#03B188] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-black">Send a message</h2>
              <p className="mt-1 text-sm text-gray-500">
                Fill in the form below and we&apos;ll be in touch shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Nimal Perera"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-gray-700 mb-1.5"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-gray-700 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Booking enquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#03B188] text-white text-sm font-semibold py-3 rounded-xl mt-2 hover:bg-[#029876] active:bg-[#028267] transition-colors"
                >
                  Send message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;