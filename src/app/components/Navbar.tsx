"use client"

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 150) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = ` mx-auto px-6 py-6 sticky top-0 ${
    scrolling
      ? "bg-transparent"
      : "backdrop-filter backdrop-blur-lg"
  } backdrop-filter 
  }`;
  return (
    <nav className={navbarClasses}>
      <div className="flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">
          <img
            src="assets/images/logo.png"
            className="h-14 hover:brightness-50 hover:duration-500"
          ></img>
        </a>
        <div className="flex space-x-6 text-white">
          <a href="#" className="hover:text-slate-400 hover:duration-500">
            ABOUT
          </a>
          <a href="#" className="hover:text-slate-400 hover:duration-500">
            EXPERIENCE
          </a>
          <a href="#" className="hover:text-slate-400 hover:duration-500">
            PROJECT
          </a>
          <a href="#" className="hover:text-slate-400 hover:duration-500">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
