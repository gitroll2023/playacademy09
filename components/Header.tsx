"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="w-[1920px] mx-auto">
        <div className="flex items-center justify-between px-20 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">인</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">인생정원</h1>
              <p className="text-xs text-gray-600">Life Garden</p>
            </div>
          </div>

          <nav className="flex gap-12">
            <Link
              href="#about"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              인생정원 소개
            </Link>
            <Link
              href="#academy"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              플레이아카데미
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              추천의 말씀
            </Link>
            <Link
              href="#director"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              이사장 소개
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              문의하기
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
              후원하기
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}