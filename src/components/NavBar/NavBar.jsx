import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import devLogo from "../../assets/devLogo.svg";
import { navLinks } from "../../constants";
import { Menu } from "../ui/navbar-menu";
import MobileNav from "./MobileNav";

const Navbar = ({ className }) => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-7xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link
          to="/"
          className="text-xl font-bold tracking-wider text-gray-900 rounded-full p-2 bg-secondary shadow-md"
        >
          <img src={devLogo} className="h-8 w-10" alt="logo" />
          <span className="sr-only">Logo</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link key={link.id} to={`#${link.id}`} className="self-center">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-end w-[100%]">
          <MobileNav />
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
