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

const Contact = () => {
  return <div className="bg-primary h-96 w-full">Contact</div>;
};

export default SectionWrapper(Contact, "contact");
