import Image from "next/image";
import Link from "next/link";

import { Norican } from "next/font/google";
import { useState } from "react";
const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], fallback: ["arial"] });

export default function Nav({ logo }) {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };
  
  return (
    <div className="flex items-center justify-between py-4 lg:bg-gradient-to-r from-[#080344]/50 via-[#0E0946]/50 to-[#080344]/50 lg:backdrop-blur-md lg:border-b-[0.025rem] lg:border-b-neutral-200/5 lg:fixed lg:w-full lg:top-0 lg:z-50">
      <div className="ml-6 flex items-center">
        <div className={norican.className}>
          <h1 className="text-4xl leading-[1.1] bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text m-0 p-0">
            <Link href="/">{logo}</Link>
          </h1>
        </div>
      </div>
      
      <div onClick={handleNavOpen} className="fixed right-0 mr-6 mt-4 lg:hidden">
        <button>
          <Image
            src="/assets/Menu-Icon.svg"
            height={60}
            width={60}
            alt="menu icon"
          />
        </button>
      </div>

      {/* mobile nav */}
      <div onClick={handleNavOpen} className={norican.className}>
        <nav
          className={
            navOpen
              ? "bg-gradient-to-r from-[#080344]/50 via-[#0E0946]/50 to-[#080344]/50 backdrop-blur-md border-l-[0.025rem] border-l-neutral-200/5 min-h-screen fixed right-0 min-w-[50%] grid grid-flow-row justify-items-center content-start gap-y-10 lg:hidden z-50"
              : "hidden"
          }
        >
          <div
            onClick={handleNavOpen}
            className="justify-self-end mr-6 mt-4 text-3xl md:text-4xl hover:text-sky-400"
          >
            <button className={inter.className}>X</button>
          </div>
          <ul className="grid grid-flow-row justify-items-center text-3xl md:text-5xl gap-y-8 md:gap-y-10">
            <li className="justify-self-start hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90">
              <Link href="#my-projects">Projects</Link>
            </li>
            <li className="hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90">
              <Link href="#contact-me">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* desktop nav - FIXED */}
      <div className={norican.className}>
        <nav className="hidden lg:block mr-8">
          <ul className="flex items-center gap-x-8 text-2xl">
            <li className="hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90 whitespace-nowrap">
              <Link href="#my-projects">Projects</Link>
            </li>
            <li className="hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90 whitespace-nowrap">
              <Link href="#contact-me">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}