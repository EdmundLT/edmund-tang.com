"use client"
import React from "react";
import { AboutMe } from "./AboutMe";
import FadeIn from "react-fade-in";
const HeroSection = () => {
  return (
    <div
      className="items-center py-12 px-4 mx-auto max-w-5xl lg:py-12 lg:px-6 text-slate-50"
      id="about"
    >
      <div className="mx-auto py-32 items-center flex-col">
        <FadeIn delay={250}>
          <div className="pt-32">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Edmund Tang
            </h1>
            <p className="text-2xl mb-8">
              Profressional Front End Developer & Tech Enthusiast
            </p>
          </div>
        </FadeIn>
        <AboutMe />
        <p className="text-xl">
          Get in touch 👉🏻{" "}
          <a
            href="mailto:edmundtl.work@gmail.com"
            className="underline decoration-pink-500 hover:bg-pink-500 hover:duration-700 p-2 rounded-lg"
          >
            edmundtl.work@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
