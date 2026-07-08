import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, MapPin, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import banner from '../../assets/1163.webp';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Frontend only — no submission logic wired up.
    console.log(formData, remember);
  };

  return (
    <div className="min-h-screen w-full bg-[#F2F4F3] flex items-center justify-center bg-cover bg-center p-4 sm:p-6 md:p-10 font-sans" style={{ backgroundImage: `url(${banner})` }}>
      <div className="relative w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
        {/* Punch-hole notches — desktop (vertical seam) */}
        <div className="hidden md:block absolute left-[38%] -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#F2F4F3] z-20" />
        <div className="hidden md:block absolute left-[38%] -translate-x-1/2 -bottom-4 w-8 h-8 rounded-full bg-[#F2F4F3] z-20" />
        {/* Punch-hole notches — mobile (horizontal seam) */}
        <div className="md:hidden absolute top-[46%] -left-4 w-8 h-8 rounded-full bg-[#F2F4F3] z-20" />
        <div className="md:hidden absolute top-[46%] -right-4 w-8 h-8 rounded-full bg-[#F2F4F3] z-20" />

        {/* LEFT STUB — ticket / route side */}
        <div className="relative w-full md:w-[38%] bg-[#03B188] text-white flex flex-col justify-between p-8 sm:p-9 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-white/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15">
                <MapPin className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/85">
                Passenger Login
              </span>
            </div>

            <h1 className="mt-8 text-3xl sm:text-[34px] leading-[1.1] font-extrabold tracking-tight">
              Ceylon
              <br />
              Routes
            </h1>
            <p className="mt-3 text-sm text-white/80 max-w-[220px]">
              Welcome back. Sign in to manage your bookings and board with
              ease.
            </p>
          </div>

          {/* Route line illustration */}
          <div className="mt-10 md:mt-0">
            <div className="flex flex-col gap-0">
              {[
                { city: "Colombo", note: "Starting point" },
                { city: "Kandy", note: "Transit hub" },
                { city: "Ella", note: "Final stop" },
              ].map((stop, i, arr) => (
                <div key={stop.city} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`w-3 h-3 rounded-full border-2 border-white ${
                        i === 0 ? "bg-white" : "bg-transparent"
                      }`}
                    />
                    {i !== arr.length - 1 && (
                      <span className="w-[2px] flex-1 min-h-[26px] bg-white/40" />
                    )}
                  </div>
                  <div className="pb-6 -mt-1">
                    <p className="text-sm font-semibold leading-none">
                      {stop.city}
                    </p>
                    <p className="text-[11px] text-white/70 mt-1">
                      {stop.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ticket footer */}
          <div className="pt-4 border-t border-white/25">
            <div className="flex items-end justify-between">
              <p className="text-[10px] tracking-[0.15em] text-white/70 uppercase">
                Ticket No.
                <br />
                <span className="text-white text-xs font-semibold tracking-normal">
                  048213
                </span>
              </p>
              {/* barcode */}
              <div className="flex items-end gap-[2px] h-6">
                {[3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2].map((w, i) => (
                  <span
                    key={i}
                    style={{ width: `${w}px` }}
                    className="h-full bg-white/80"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — form side */}
        <div className="w-full md:w-[62%] p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-black">Welcome back</h2>
          <p className="mt-1.5 text-sm text-gray-500">
            Log in to continue booking your bus tickets.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-gray-700 mb-1.5"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-gray-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-[#03B188] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#03B188] focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex items-center gap-2.5 pt-1 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="w-4 h-4 rounded border-gray-300 text-[#03B188] focus:ring-[#03B188] accent-[#03B188]"
              />
              <span className="text-xs text-gray-500">Remember me on this device</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#03B188] text-white text-sm font-semibold py-3 rounded-xl mt-2 hover:bg-[#029876] active:bg-[#028267] transition-colors"
            >
              Log in
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-7">
            <span className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] uppercase tracking-wide text-gray-400">
              or
            </span>
            <span className="flex-1 h-px bg-gray-200" />
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-[#03B188] font-semibold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;