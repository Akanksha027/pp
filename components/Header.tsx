"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const timeString = `IND ${hours}:${minutes}:${seconds} ${hours >= 12 ? "PM" : "AM"
        }`;
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/30 max-w-full overflow-hidden">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 max-w-full">
          {/* Logo */}
          <div className="shrink-0">
            <span
              onClick={() => router.push("/")}
              className="text-white text-lg cursor-pointer sm:text-xl font-light tracking-wider whitespace-nowrap"
            >
              AKANKSHA
              <span className="text-green-400">°</span>
            </span>
          </div>

          {/* Center - WORKS only on mobile, both on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex gap-4 sm:gap-8">
              <Link
                href="/works"
                className="text-white cursor-pointer text-xs sm:text-sm font-light tracking-wide hover:text-green-400 transition-colors whitespace-nowrap"
              >
                WORKS
              </Link>
              <Link
                href="/about-me"
                className="hidden sm:block text-white cursor-pointer text-xs sm:text-sm font-light tracking-wide hover:text-green-400 transition-colors whitespace-nowrap"
              >
                ABOUT ME
              </Link>

              <Link
                href="/#lets-connect"
                className="hidden sm:block text-white cursor-pointer text-xs sm:text-sm font-light tracking-wide hover:text-green-400 transition-colors whitespace-nowrap"
              >
                CONTACT
              </Link>
            </div>
          </div>

          {/* Right side - ABOUT ME on mobile, Time on desktop */}
          <div className="flex items-center shrink-0">
            {/* ABOUT ME - Mobile only */}
            <Link
              href="/about-me"
              className="sm:hidden text-white cursor-pointer text-xs font-light tracking-wide hover:text-green-400 transition-colors whitespace-nowrap"
            >
              ABOUT ME
            </Link>
            {/* Time - Desktop only */}
            <span className="hidden sm:inline text-white text-xs sm:text-sm font-light tracking-wide whitespace-nowrap">
              {currentTime}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
