import { Skills } from "./components/Skills";
import HeroSection from "./components/HeroSection";
import AnimatedCursor from "react-animated-cursor";
import Projects from "./components/Projects";
import { Experiences } from "./components/Experiences";
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
      <Skills />
      <Experiences />
      <Projects />
    </>
  );
}
