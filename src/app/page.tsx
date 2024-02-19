"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { Skills } from "./components/Skills";
import HeroSection from "./components/HeroSection";
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
      <HeroSection />
      {/* <Box Component={HeroSection} /> */}
      <Box Component={Skills} />
      <Box Component={Experiences} />
      <Box Component={Projects} />
    </>
  );
}
