import Link from "next/link";
import Image from "next/image";
import desktopAvatar from "../public/images/about-img/big-pexels-girl-smiling-square.png";
import mobileAvatar from "../public/images/about-img/pexels-girl-smiling-circle-small.png";

import { Norican } from "next/font/google";
const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

export default function About({
  welcome,
  name,
  introduction,
  callToActionButton,
}) {
  return (
    <div
      className="grid grid-flow-rows justify-items-center
     lg:grid-cols-2 lg:justify-items-end
     lg:gap-x-6 lg:mt-20"
    >
      <div className="contents lg:grid lg:content-center">
        <h1 className="text-5xl pb-2 mt-11 md:text-6xl lg:pl-8 lg:text-6xl">
          {welcome}
        </h1>
        <>
          <div className={norican.className}>
            <h1
              className="text-7xl text-center pb-4 px-2 bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text md:text-8xl md: pr-8
          lg:text-9xl lg:text-left lg:pl-4 lg:pb-6 lg:leading-[10rem]"
            >
              {name}
            </h1>
          </div>
        </>

        {/* only displays this circular avatar on mobile */}
        <div className="py-7 justify-self-center lg:hidden">
          <Image src={mobileAvatar} alt="circular avatar of a woman smiling" />
        </div>

        {/*Decrease font-size and increase padding and decrease max-width to change text placement*/}
        <h1
          className="text-[2.4rem] max-w-xxs pb-3.5 leading-[2.8rem] 
      md:max-w-md
      md:mb-2
      lg:grid  lg:max-w-xl lg:max-h-80 lg:text-5xl lg:leading-[4.5rem] lg:pl-8"
        >
          {introduction}
        </h1>
        <div
          className="
      bg-gradient-to-r from-aqua to-lavender w-72 text-center text-2xl p-[0.18rem] rounded-md mb-11 mt-4
      md:w-[28rem] lg:ml-8 hover:scale-110 transition ease-in-out delay-200 "
        >
          <Link href="#contact-me">
            <div className="bg-gradient-to-r from-[#080344] via-[#0E0946] to-[#080344] p-4 rounded-md lg:text-3xl hover:scale-100 hover:cursor-pointer">
              <button>{callToActionButton}</button>
            </div>
          </Link>
        </div>
      </div>

      {/* only displays this square avatar on large screens */}
      <div className="hidden lg:grid lg:my-10 lg:justify-self-start">
        <Image
          src={desktopAvatar}
          alt="square avatar of a woman smiling"
          priority
        />
      </div>
    </div>
  );
}
