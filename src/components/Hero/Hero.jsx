import BentoGrid from "../BentoGrid";
import ComputersCanvas from "../Canvas/ComputerCanvas";
import SectionWrapper from "../HOCs/SectionWrapper";
import { TypewriterEffect } from "../ui/typewriter-effect";

const Hero = () => {
  const welcomeText = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "website",
    },
    {
      text: "I'm",
      className: "text-blue-500",
    },
    {
      text: "Andell",
      className: "text-blue-500",
    },
  ];

  return (
    <>
      <BentoGrid />
    </>
  );
};

export default SectionWrapper(Hero, "home");
