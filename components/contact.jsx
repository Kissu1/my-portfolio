import Image from "next/image";
import Link from "next/link";

import githubIcon from "../public/assets/github-mark.svg";

import { Norican } from "next/font/google";
const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

// all social media icons and links
const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-8">
      <Link href="https://github.com/Kissu1">
        <Image
          src={githubIcon}
          alt="GitHub social media icon with link to GitHub page"
        />
      </Link>
    </div>
  );
};

export default function Contact({ title, firstPara, secondPara, email }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <div className="max-w-md w-full">
        {/* Contact title */}
        <div className={norican.className}>
          <h1 className="pb-4 text-6xl bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text lg:text-7xl">
            {title}
          </h1>
        </div>

        {/* text box */}
        <div className="border-cyan-300/90 rounded-lg border-2 w-full my-4">
          <p className="text-2xl my-6 mx-5 lg:text-3xl lg:leading-normal">
            {firstPara} <br /> {secondPara}
            <span className="text-cyan-300"> {email}</span>
          </p>
        </div>

        {/* Social media icon */}
        <SocialMedia />
      </div>
    </div>
  );
}

