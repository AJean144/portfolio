import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <BackgroundGradientAnimation className="h-screen mx-2">
        <Component />
      </BackgroundGradientAnimation>
    );
  };

export default SectionWrapper;
