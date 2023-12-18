"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Skills } from "./components/Skills";
import HeroSection from "./components/HeroSection";
import AnimatedCursor from "react-animated-cursor";
import Projects from "./components/Projects";
import { Experiences } from "./components/Experiences";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ Component }: any) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Component />
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="193, 11, 111"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <HeroSection />
      {/* <Box Component={HeroSection} /> */}
      <Box Component={Skills} />
      <Box Component={Experiences} />
      <Box Component={Projects} />
    </>
  );
}
