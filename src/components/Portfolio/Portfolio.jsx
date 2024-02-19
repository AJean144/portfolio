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

const Portfolio = () => {
  return <div className="bg-primary h-96 w-full">Portfolio</div>;
};

export default SectionWrapper(Portfolio, "portfolio", "bg-primary");
