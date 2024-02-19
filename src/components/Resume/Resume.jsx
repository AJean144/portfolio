import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import devLogo from "../../assets/devLogo.svg";
import { navLinks } from "../../constants";
import { SectionWrapper } from "../HOCs";

const Resume = () => {
  return <div className="bg-primary h-96 w-full">Resume</div>;
};

export default SectionWrapper(Resume, "resume", "bg-primary");
