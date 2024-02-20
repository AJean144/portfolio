"use client";
import { cn } from "@/utils/cn";
import { IconDeviceLaptop, IconWorld } from "@tabler/icons-react";
import { motion } from "framer-motion";
import devLogo from "../../assets/devLogo.svg";
import seoIcon from "../../assets/seoIcon.svg";
import threejs from "../../assets/threejs.svg";
import ComputersCanvas from "../Canvas/ComputerCanvas";
import { BentoGridItem, BentoGrid as BentoGridUI } from "../ui/bento-grid";
import { Button } from "../ui/button";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffect } from "../ui/typewriter-effect";
import ImagesSlider from "../ImageSlider";

const welcomeText = [
  {
    text: "I'm",
    className: "text-secondary-300 drop-shadow-md",
  },
  {
    text: "Andell,",
    className: "text-secondary-300 drop-shadow-md",
  },
  {
    text: "Welcome",
    className: "text-secondary-500 drop-shadow-md",
  },
  {
    text: "to",
    className: "text-secondary-500 drop-shadow-md",
  },
  {
    text: "my",
    className: "text-secondary-500 drop-shadow-md",
  },
  {
    text: "website",
    className: "text-secondary-500 drop-shadow-md",
  },
];

const BentoGrid = () => {
  return (
    <BentoGridUI className="max-w-7xl mt-32 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGridUI>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  const seoCopy = `Let's get your website to the top of the search results with my custom built SEO tools.`;
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <TextGenerateEffect words={seoCopy} />
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #DFD4F7, #D9E6F2, #E5E5E6, #ffffff)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="flex justify-center my-2 h-full w-full rounded-lg">
        <IconWorld className="h-36 w-36 text-slate-100" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[10rem] dark:bg-dot-white/[0.2] rounded-lg drop-shadow-lg bg-dot-black/[0.2] flex-row space-x-2 bg-secondary-900"
      style={{
        background:
          "linear-gradient(-45deg, #D9E6F2, #FFFFFF, #E5E5E6, #D9E6F2)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="flex flex-col contain mx-auto mt-10 md:mt-4 w-[95%] gap-2">
        <TypewriterEffect words={welcomeText} className="-mt-6 sm:mt-0" />
        <Button className="inline-flex self-center h-10 mt-2 md:mt-6 w-full md:w-28 lg:w-28 lg:mt-12 animate-shimmer items-center justify-center rounded-md border border-secondary-700 bg-[linear-gradient(110deg,#B4CDE4,45%,#8EB4D7,55%,#B4CDE4)] bg-[length:200%_100%] px-6 text-1xl text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Let's Chat!
        </Button>
      </div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <ImagesSlider />

      {/* <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div> */}
    </motion.div>
  );
};
const items = [
  {
    title: "Software Engineer",
    description: (
      <span className="text-sm">
        Understand the intrecacies of software development and design.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <img src={devLogo} className="h-8 w-10" alt="three.js icon" />,
  },
  {
    title: "3D Rendering",
    description: (
      <span className="text-sm">
        Experience the power of 3D rendering in the browser with Three.js.
      </span>
    ),
    header: <ComputersCanvas />,
    className: "md:col-span-1",
    icon: <img src={threejs} className="h-8 w-10" alt="three.js icon" />,
  },
  {
    title: "Modern Websites",
    description: (
      <span className="text-sm">
        I build modern websites with the latest technologies and frameworks.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconWorld className="h-8 w-8" />,
  },
  {
    title: "Automated SEO",
    description: (
      <span className="text-sm">
        I use custom built AI tools to automate your SEO and improve your
        website ranking.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <img src={seoIcon} className="h-8 w-10" alt="three.js icon" />,
  },
  {
    title: "Custom App Development",
    description: (
      <span className="text-sm">
        I can help you build custom applications for any platform or device.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconDeviceLaptop className="h-8 w-8" />,
  },
];

export default BentoGrid;
