import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navLinks } from "../../constants";

const MobileNav = () => {
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex items-center p-2 w-10 h-10 justify-center self-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors duration-200">
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerFooter>
          <ul className="flex justify-between w-[100%] py-6">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="flex justify-center max-sm:justify-evenly"
              >
                <a href={`#${link.id}`}>
                  <DrawerClose className="flex justify-end items-center space-x-2 p-1 bg-primary-800 rounded-full shadow-xl gap-3">
                    <span className="flex flex-row w-9 h-9 p-2 text-secondary-300 rounded-full bg-primary-900 drop-shadow-xl">
                      {link.icon}
                    </span>
                    <span className="pr-6 max-sm:hidden">{link.title}</span>
                  </DrawerClose>
                </a>
              </li>
            ))}
          </ul>

          <DrawerClose className="p-2 w-full rounded-md bg-secondary-700 text-primary-200 hover:bg-secondary-600 hover:text-primary-100 transition-all duration-200 shadow-md">
            Close
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
