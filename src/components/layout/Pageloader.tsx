import { useEffect, useState } from "react";

type PageLoaderProps = {
    message?: string;
    duration?: number;
    onFinish?: () => void;
};

const PageLoader = ({
    message = "Loading your journey...",
    duration = 2000,
    onFinish,
}: PageLoaderProps) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, duration - 400);

        const finishTimer = setTimeout(() => {
            onFinish?.();
        }, duration);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };
    }, [duration, onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            {/* Road track */}
            <div className="relative w-72 h-28 mb-6">
                {/* Road */}
                <div className="absolute bottom-0 left-0 right-0 h-10 rounded-xl bg-slate-700 overflow-hidden">
                    {/* Road dashes */}
                    <div className="absolute top-1/2 -translate-y-1/2 flex gap-4 animate-road-dash">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-8 h-1 rounded-full bg-[#03B188] opacity-70"
                            />
                        ))}
                    </div>
                </div>

                {/* Bus */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bus-bounce">
                    <svg
                        width="120"
                        height="60"
                        viewBox="0 0 120 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="drop-shadow-xl"
                    >
                        {/* Body */}
                        <rect
                            x="4"
                            y="8"
                            width="112"
                            height="44"
                            rx="6"
                            fill="#06fbc1"
                        />

                        {/* Roof */}
                        <rect
                            x="8"
                            y="6"
                            width="104"
                            height="8"
                            rx="3"
                            fill="#039875"
                        />

                        {/* Front glass */}
                        <rect
                            x="86"
                            y="12"
                            width="22"
                            height="18"
                            rx="3"
                            fill="#BAE6FD"
                            opacity="0.9"
                        />

                        {/* Windows */}
                        <rect
                            x="12"
                            y="12"
                            width="18"
                            height="14"
                            rx="2"
                            fill="#BAE6FD"
                            opacity="0.9"
                        />

                        <rect
                            x="34"
                            y="12"
                            width="18"
                            height="14"
                            rx="2"
                            fill="#BAE6FD"
                            opacity="0.9"
                        />

                        <rect
                            x="56"
                            y="12"
                            width="18"
                            height="14"
                            rx="2"
                            fill="#BAE6FD"
                            opacity="0.9"
                        />

                        {/* Door */}
                        <rect
                            x="78"
                            y="26"
                            width="8"
                            height="20"
                            rx="1"
                            fill="#039875"
                            opacity="0.9"
                        />

                        {/* Headlight */}
                        <ellipse
                            cx="112"
                            cy="30"
                            rx="5"
                            ry="4"
                            fill="#FEF3C7"
                            opacity="0.95"
                        />

                        {/* Wheels */}
                        <circle cx="26" cy="52" r="9" fill="#1E293B" />
                        <circle cx="26" cy="52" r="5" fill="#374151" />
                        <circle cx="26" cy="52" r="2" fill="#9CA3AF" />

                        <circle cx="88" cy="52" r="9" fill="#1E293B" />
                        <circle cx="88" cy="52" r="5" fill="#374151" />
                        <circle cx="88" cy="52" r="2" fill="#9CA3AF" />

                        {/* Stripe */}
                        <rect
                            x="4"
                            y="30"
                            width="112"
                            height="4"
                            fill="#039875"
                            opacity="0.5"
                        />
                    </svg>
                </div>

                {/* Exhaust */}
                <div className="absolute bottom-8 left-[calc(50%-66px)] flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-slate-500 opacity-60 animate-puff-1" />
                    <div className="w-2 h-2 rounded-full bg-slate-500 opacity-40 animate-puff-2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500 opacity-20 animate-puff-3" />
                </div>
            </div>

            {/* Message */}
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#03B188] animate-pulse" />

                <p className="text-slate-300 text-sm font-medium tracking-widest uppercase">
                    {message}
                </p>

                <div className="w-2 h-2 rounded-full bg-[#03B188] animate-pulse" />
            </div>

            {/* Progress */}
            <div className="w-52 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#03B188] rounded-full animate-progress"
                    style={{
                        animationDuration: `${duration}ms`,
                    }}
                />
            </div>

            {/* Animations */}
            <style>{`
        @keyframes road-dash {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-48px);
          }
        }

        @keyframes bus-bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
          }

          50% {
            transform: translateX(-50%) translateY(-3px);
          }
        }

        @keyframes puff-1 {
          0% {
            opacity: 0.6;
            transform: translateX(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateX(-18px) scale(2);
          }
        }

        @keyframes puff-2 {
          0% {
            opacity: 0.4;
            transform: translateX(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateX(-24px) scale(2.2);
          }
        }

        @keyframes puff-3 {
          0% {
            opacity: 0.2;
            transform: translateX(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateX(-30px) scale(2.5);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }

        .animate-road-dash {
          animation: road-dash 0.6s linear infinite;
        }

        .animate-bus-bounce {
          animation: bus-bounce 0.5s ease-in-out infinite;
        }

        .animate-puff-1 {
          animation: puff-1 1.2s ease-out infinite;
        }

        .animate-puff-2 {
          animation: puff-2 1.2s ease-out 0.3s infinite;
        }

        .animate-puff-3 {
          animation: puff-3 1.2s ease-out 0.6s infinite;
        }

        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
        </div>
    );
};

export default PageLoader;