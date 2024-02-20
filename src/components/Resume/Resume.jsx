import { HeroParallax } from "../ui/hero-parallax";
import everlyHealthImage from "../../assets/appImages/everlyHealthImage.png";
import aloftImage from "../../assets/appImages/aloftImage.png";
import bafImage from "../../assets/appImages/bafImage.png";
import adventHealthImage from "../../assets/appImages/adventHealthImage.png";
import madMobileImage from "../../assets/appImages/madMobileImage.png";
import politechImage from "../../assets/appImages/politechImage.png";
import { ContainerScroll } from "../ui/container-scroll-animation";
import {
  reactLogo,
  nextJSLogo,
  nuxtLogo,
  threeJSLogo,
  nodeLogo,
  railsLogo,
} from "../../assets/techImages";

export const products = [
  {
    title: "Everly Health",
    link: "https://everlywell.com",
    thumbnail: everlyHealthImage,
  },
  {
    title: "Aloft",
    link: "https://www.aloft.ai/",
    thumbnail: aloftImage,
  },
  {
    title: "Big Ass Fans",
    link: "https://bigassfans.com",
    thumbnail: bafImage,
  },

  {
    title: "Everly Health",
    link: "https://everlywell.com",
    thumbnail: everlyHealthImage,
  },
  {
    title: "Aloft",
    link: "https://www.aloft.ai/",
    thumbnail: aloftImage,
  },
  {
    title: "Big Ass Fans",
    link: "https://bigassfans.com",
    thumbnail: bafImage,
  },

  {
    title: "Advent Health",
    link: "https://adventhealth.com",
    thumbnail: adventHealthImage,
  },
  {
    title: "Mad Mobile",
    link: "https://madmobile.com/",
    thumbnail: madMobileImage,
  },
  {
    title: "Politech (Blocks App)",
    link: "https://blocks.app/",
    thumbnail: politechImage,
  },
];

export const technologies = [
  {
    name: "React.js",
    designation: "A JavaScript Frontend Library",
    image: reactLogo,
    badge: "My #1 Choice",
  },
  {
    name: "Next.js",
    designation: "A JavaScript Framework built on React.js",
    image: nextJSLogo,
    badge: "My #1 Choice",
  },
  {
    name: "Nuxt",
    designation: "A JavaScript Framework built on Vue.js",
    image: nuxtLogo,
    badge: "Great choice",
  },
  {
    name: "Three.js",
    designation: "A JavaScript Library for 3D rendering",
    image: threeJSLogo,
    badge: "Very powerful",
  },
  {
    name: "Node.js & Express.js",
    designation: "Bacnend Development with JavaScript",
    image: nodeLogo,
    badge: "Amazing for APIs",
  },
  {
    name: "Rails",
    designation: "Backend Development with Ruby on Rails",
    image: railsLogo,
    badge: "#1 Backend Choice",
  },
  {
    name: "Python",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];

const Resume = () => {
  return (
    <section className="h-[320vh] w-full bg-secondary-900 transition-shadow">
      <HeroParallax products={products} />
      <ContainerScroll
        users={technologies}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              My Favorite Technologies <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Just a few
              </span>
            </h1>
          </>
        }
      />
    </section>
  );
};

export default Resume;
