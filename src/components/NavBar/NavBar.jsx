import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import devLogo from "../../assets/devLogo.svg";
import { navLinks } from "../../constants";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const NavBar = () => (
  <header className="flex fixed top-0 z-20 w-full items-center justify-between px-4 py-6 bg-background drop-shadow-sm">
    <Link
      to="/"
      className="text-xl font-bold tracking-wider text-gray-900 dark:text-gray-100 rounded-full p-2 bg-secondary"
    >
      <img src={devLogo} className="h-8 w-8" alt="logo" />
      <span className="sr-only">Logo</span>
    </Link>
    <nav className="space-x-4 hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuLink
                href={`#${link.id}`}
                className={`text-secondary ${navigationMenuTriggerStyle()}`}
              >
                {link.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>

    <MobileNav />
  </header>
);

export default NavBar;
