"use client"
import React from "react";
import BlogSection from "../components/BlogSection";

const Home =  () => {
  return (
    <div className="items-center py-12 px-4 mx-auto max-w-5xl lg:py-16 lg:px-6 text-slate-50">
      {/* Title and section */}
      <div className="py-6">
        <p className="text-3xl font-bold">TECH BLOGS</p>
        <p className="text-md font-light text-slate-400 mt-3">
          My Software Engineering Learning Journey
        </p>
      </div>
      <BlogSection />

    </div>
  );
};

export default Home;
