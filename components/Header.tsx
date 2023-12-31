import React from "react";
import { motion } from "framer-motion";
import { IoIosGlobe, IoMdSearch, IoMdPerson } from "react-icons/io";
import Head from "next/head";
import Link from "next/link";

function Header() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="absolute mt-5 flex w-full flex-wrap items-center justify-between gap-2 px-5 text-xs font-medium uppercase opacity-90 md:px-10">
      <Head>
        <title>Cool Project</title>
      </Head>
      <div className="  flex items-center gap-2 font-medium tracking-[4px]">
        {/* <IoIosGlobe className=" text-xl" />
        Trust me */}
        <Link href="/"><img src="/logo.png" className="h-12 hover:opacity-80" alt="" /></Link>
      </div>
      <ul className="flex flex-wrap items-center gap-3 text-[13px] md:gap-10">
      {menus.map((menu, index) => {
        return (
          <motion.li
            layout
            key={index}
            className={`${
              active === index ? "border-b-2 border-b-yellow-500" : ""
            } inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            onClick={() => setActive(index)}
          >
            <Link href={menu}>{menu}</Link>
          </motion.li>
        );
      })}
      <div className="flex items-center gap-6">
        {/* <IoMdSearch className="text-lg" /> */}
        {/* <IoMdPerson className="text-lg" /> */}
      </div>
    </ul>
    </div>
  );
}

export default Header;

const menus = [
  "home",
  "contact",
  "about",
  "login",
  "signup",
];
