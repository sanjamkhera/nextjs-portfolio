"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link 
      className={`
        relative 
        rounded 
        p-2 
        group
        m-4
        ${pathName === link.url ? "text-white text-xl" : ""}
      `} 
      href={link.url}
    >
      {link.title}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;