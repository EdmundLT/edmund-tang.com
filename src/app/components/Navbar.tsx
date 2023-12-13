"use client";

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
    scrolling ? "bg-transparent" : "backdrop-filter backdrop-blur-lg"
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
          <div
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#about");
            }}
            className="hover:text-slate-400 hover:duration-500"
          >
            ABOUT
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#skills");
            }}
            className="hover:text-slate-400 hover:duration-500"
          >
            SKILLS
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#experiences");
            }}
            className="hover:text-slate-400 hover:duration-500"
          >
            EXPERIENCE
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#projects");
            }}
            className="hover:text-slate-400 hover:duration-500"
          >
            PROJECT
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
