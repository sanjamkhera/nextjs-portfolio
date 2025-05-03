"use client"

import { AnimatePresence } from "framer-motion"
import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="min-h-screen flex flex-col">
        {/* Opening transition */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          initial={{ height: "150vh" }}
          animate={{ height: "0vh" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Page name animation */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          {pathName === "/" ? "Home" :
            pathName.startsWith("/case-study/") ?
              pathName.split("/").pop().split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") :
              pathName.substring(1, 2).toUpperCase() + pathName.substring(2)}
        </motion.div>

        {/* Closing transition */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
          initial={{ height: 0 }}
          animate={{ height: 0 }}
          exit={{ height: "150vh" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Main content structure */}
        <Navbar />

        <main className="flex-grow bg-gradient-to-r from-[#F3F3E0] to-[#B9E5E8] pt-24">
          {children}
        </main>

        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;