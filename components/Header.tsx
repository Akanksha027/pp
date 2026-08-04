"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const HEADER_HEIGHT = 64;

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [currentTime, setCurrentTime] = useState("");
  const [navLight, setNavLight] = useState(isHome);

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

  useEffect(() => {
    if (!isHome) {
      setNavLight(false);
      return;
    }

    const updateNavTheme = () => {
      const hero = document.getElementById("landing-hero-white");
      if (!hero) {
        setNavLight(true);
        return;
      }
      const rect = hero.getBoundingClientRect();
      setNavLight(rect.bottom > HEADER_HEIGHT);
    };

    updateNavTheme();
    window.addEventListener("scroll", updateNavTheme, { passive: true });
    window.addEventListener("resize", updateNavTheme);

    return () => {
      window.removeEventListener("scroll", updateNavTheme);
      window.removeEventListener("resize", updateNavTheme);
    };
  }, [isHome, pathname]);

  const light = isHome && navLight;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 max-w-full overflow-hidden transition-colors duration-300 ${
        light ? "bg-transparent" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 max-w-full">
          <div className="shrink-0">
            <span
              onClick={() => router.push("/")}
              className={`text-lg cursor-pointer sm:text-xl font-light tracking-wider whitespace-nowrap transition-colors ${
                light ? "text-black" : "text-white"
              }`}
            >
              AKANKSHA
              <span className={light ? "text-neutral-500" : "text-green-400"}>°</span>
            </span>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex gap-4 sm:gap-8">
              <Link
                href="/works"
                className={`cursor-pointer text-xs sm:text-sm font-light tracking-wide transition-colors whitespace-nowrap ${
                  light
                    ? "text-black hover:text-neutral-600"
                    : "text-white hover:text-green-400"
                }`}
              >
                WORKS
              </Link>
              <Link
                href="/about-me"
                className={`hidden sm:block cursor-pointer text-xs sm:text-sm font-light tracking-wide transition-colors whitespace-nowrap ${
                  light
                    ? "text-black hover:text-neutral-600"
                    : "text-white hover:text-green-400"
                }`}
              >
                ABOUT ME
              </Link>
              <Link
                href="/#lets-connect"
                className={`hidden sm:block cursor-pointer text-xs sm:text-sm font-light tracking-wide transition-colors whitespace-nowrap ${
                  light
                    ? "text-black hover:text-neutral-600"
                    : "text-white hover:text-green-400"
                }`}
              >
                CONTACT
              </Link>
            </div>
          </div>

          <div className="flex items-center shrink-0">
            <Link
              href="/about-me"
              className={`sm:hidden cursor-pointer text-xs font-light tracking-wide transition-colors whitespace-nowrap ${
                light
                  ? "text-black hover:text-neutral-600"
                  : "text-white hover:text-green-400"
              }`}
            >
              ABOUT ME
            </Link>
            <span
              className={`hidden sm:inline text-xs sm:text-sm font-light tracking-wide whitespace-nowrap transition-colors ${
                light ? "text-neutral-600" : "text-white"
              }`}
            >
              {currentTime}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
