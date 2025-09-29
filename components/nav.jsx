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
    <div className="flex justify-between lg:bg-gradient-to-r from-[#080344]/50 via-[#0E0946]/50 to-[#080344]/50 lg:backdrop-blur-md lg:border-b-[0.025rem] lg:border-b-neutral-200/5 lg:fixed lg:min-w-full lg:top-0 ">
      <div className="ml-6 mt-4 lg:mt-8">
        <div className={norican.className}>
          <h1 className="bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text pb-4">
            <Link href="/">{logo}</Link>
          </h1>
        </div>
      </div>
      <div onClick={handleNavOpen} className=" fixed right-0 mr-6 mt-4">
        <button>
          <Image
            className="lg:hidden"
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
              ? " bg-gradient-to-r from-[#080344]/50 via-[#0E0946]/50 to-[#080344]/50 backdrop-blur-md border-l-[0.025rem] border-l-neutral-200/5 min-h-screen fixed right-0  min-w-[50%] grid grid-flow-row justify-items-center content-start gap-y-10  lg:hidden"
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
            <li className="justify-self-start hover:underline underline-offset-8 decoration-2  decoration-neutral-200/90 ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:underline underline-offset-8 decoration-2  decoration-neutral-200/90">
              <Link href="#my-projects">Projects</Link>
            </li>
            <li className=" hover:underline underline-offset-8 decoration-2  decoration-neutral-200/90">
              <Link href="#contact-me">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* desktop nav */}
      <div className={norican.className}>
        <nav className="hidden lg:grid">
          <ul
            className="
          grid grid-flow-col justify-items-center  text-4xl gap-x-16 items-center mr-10 mt-8"
          >
            <li
              className="
            hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90"
            >
              <Link href="#my-projects">Projects</Link>
            </li>
            <li
              className="
            hover:underline underline-offset-8 decoration-2 decoration-neutral-200/90"
            >
              <Link href="#contact-me">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
