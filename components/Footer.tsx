"use client";
import React, { useState } from "react";
import Link from "next/link";
import BookCallModal from "./BookCallModal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-transparent text-white flex flex-col pt-24 sm:pt-32 lg:pt-40">
      <div className="px-4 sm:px-8 lg:px-20 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-start gap-8 sm:gap-4 pt-6 sm:pt-8 z-10">
        {/* Menu & Social - stack on mobile, row on larger */}
        <div className="flex flex-wrap gap-8 sm:gap-16 lg:gap-24">
          <div>
            <h3 className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
              Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li>
                <Link
                  href="/works"
                  className="hover:text-gray-300 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/about-me"
                  className="hover:text-gray-300 transition-colors"
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
              © LINKS °
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
              <li>
                <a
                  href="https://github.com/Akanksha027/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/akanksha-singh-0ba17b315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA - full width on mobile, right-aligned on larger */}
        <div className="sm:text-right sm:max-w-xs lg:max-w-none">
          <h2 className="text-lg sm:text-2xl lg:text-4xl font-light leading-tight mb-2">
            Let&apos;s build together. Waiting to connect.
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm cursor-pointer sm:text-base lg:text-lg underline hover:text-gray-300 transition-colors"
          >
            Book A Call
          </button>
        </div>
      </div>

      {/* Main Footer Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-4 min-h-[40vh] sm:min-h-0">
        <div className="text-center">
          <div className="mb-4 sm:mb-8">
            <h1 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] font-light leading-none tracking-tight">
              AKANKSHA
              <span className="inline-block w-3 h-3 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 bg-white rounded-full align-super ml-1 sm:ml-2"></span>
            </h1>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Credits - stack on mobile */}
      <div className="px-4 sm:px-8 lg:px-20 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-[10px] sm:text-xs lg:text-sm text-gray-400">
        <span>©2026</span>
        <span className="text-left sm:text-right">Akanksha  Singh · Software Developer</span>
      </div>

      <BookCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
