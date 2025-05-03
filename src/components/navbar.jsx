"use client"

import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import Image from 'next/image';


const links = [
  { url: "/", title: "Home" },
  { url: "/#work", title: "Our Work" },
  { url: "/ai-insights", title: "AI Insights" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants = { closed: { rotate: 0, }, opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" } }
  const centerVariants = { closed: { opacity: 1, }, opened: { opacity: 0, } }
  const bottomVariants = { closed: { rotate: 0, }, opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" } }
  const listVariants = { closed: { x: "100vw", }, opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.2, } } }
  const listItemVariants = { closed: { x: -10, opacity: 0, }, opened: { x: 0, opacity: 1, } }


  return (
    <div className='flex items-center px-4 sm:px-8 md:px-12 lg:px-20 lx:px-48 text-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-6 fixed top-0 h-24 w-full z-10'>

      <div className="w-full flex justify-between items-center">

        {/* LINKS */}
        <div className='text-white hidden md:flex justify-around '>
          {links.map((link) => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        {/* LOGO */}
        <div className="flex">
          <Link href="/" className="flex items-center justify-center">
            <Image src="/logo.png" alt="Seawall Software Logo" width={48} height={48} className="mr-2" />
            <div className="flex flex-col text-xl">
              <span className="text-white">Seawall</span>
              <span className="text-white">Software</span>
            </div>
          </Link>
        </div>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">

        {/* MENU BUTTON  */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative cursor:pointer' onClick={() => setOpen((prev) => !prev)}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'>

          </motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded'>

          </motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'>

          </motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

    </div>
  );
};

export default Navbar;