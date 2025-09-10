// components/first-time-visitors/WelcomeModules.tsx
"use client";
import { useState, useEffect, useRef } from "react";

export default function WelcomeModules() {
  const [showCookies, setShowCookies] = useState(false);
  const [hideCookies, setHideCookies] = useState(true);

  useEffect(() => {
    const accepted = localStorage.getItem("chrome_cookies_accepted");
    if (!accepted) {
      setShowCookies(true);
    }
  }, []);

  useEffect(() => {
    if (showCookies) requestAnimationFrame(() => setHideCookies(false));
  }, [showCookies]);

  const acceptCookies = () => {
    localStorage.setItem("chrome_cookies_accepted", "1");
    setHideCookies(true);
  };

  const rejectCookies = () => {
    localStorage.setItem("chrome_cookies_accepted", "2");
    setHideCookies(true);
  };

  useEffect(() => {
    if (hideCookies && showCookies) {
      const id = setTimeout(() => setShowCookies(false), 300);
      return () => clearTimeout(id);
    }
  }, [hideCookies, showCookies]);

  return (
    <>
      {showCookies && (
        <div
          className={`fixed bottom-4 inset-x-4 z-50 max-w-6xl mx-auto bg-black/70 border-[3px] border-purple-500 rounded-xl backdrop-blur-lg flex flex-col md:flex-row items-center gap-4 p-4 md:p-5 transition-opacity duration-300 ${hideCookies ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex-grow flex items-center gap-4">
            <svg
              className="flex-shrink-0 size-8 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.657 9.415h.01m-1.386 3.585h.01m7.677 1.915h.01M11 17h.01m3.178-10.907a3.46 3.46 0 0 0-3.172-.757 3.46 3.46 0 0 0-2.532.456c-2.223 2.223-2.223 5.83 0 8.053a5.83 5.83 0 0 0 8.053 0c2.223-2.223 2.223-5.83 0-8.053a3.46 3.46 0 0 0-2.35-1.233Z"
              />
            </svg>
            <p className="text-sm md:text-base text-white font-semibold tracking-wide [text-shadow:1px_1px_1px_#000]">
              We use cookies to enhance your $CHROME experience.
              <a
                href="/cookie-policy"
                className="underline ml-1 hover:text-purple-400 transition-colors"
              >
                Learn more
              </a>
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center justify-end gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="px-5 py-2 bg-white text-black font-bold tracking-wider rounded-lg border-2 border-black text-sm shadow-[3px_3px_0px_#000] hover:shadow-none hover:bg-gray-200 active:scale-95 hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 ease-in-out"
            >
              Reject
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2 bg-purple-600 text-white font-bold tracking-wider rounded-lg border-2 border-black text-sm shadow-[3px_3px_0px_#000] hover:shadow-none hover:brightness-110 active:scale-95 hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 ease-in-out"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}