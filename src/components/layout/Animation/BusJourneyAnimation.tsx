const BusJourneyAnimation = () => {
    return (
        <div className="relative w-full h-36 overflow-hidden flex items-center">

            {/* Animated dotted line */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="0" y1="50%" x2="100%" y2="50%"
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-56"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </line>
            </svg>

            {/* Traveling bus */}
            <div className="absolute top-1/2 animate-bus-travel flex flex-col items-start"
                style={{ transform: 'translateY(-60%)' }}>
                {/* Smoke puffs */}
                <div className="relative h-3 w-5 ml-1 mb-[-2px]">
                    <span className="smoke-puff" style={{ left: 2, animationDelay: '0s' }} />
                    <span className="smoke-puff" style={{ left: 9, animationDelay: '0.3s' }} />
                    <span className="smoke-puff" style={{ left: 4, animationDelay: '0.6s' }} />
                </div>

                <svg
                    width="54"
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
        </div>
    );
};

export default BusJourneyAnimation