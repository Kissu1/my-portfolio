import Image from "next/image";
import Link from "next/link";

import twitterIcon from "../public/assets/Twitter-social-icons-circle-blue-1.png";
import linkedInIcon from "../public/assets/LI-In-Bug-1.png";
import instaIcon from "../public/assets/Instagram_Glyph_Gradient_1.png";
import profileImg from "../public/images/social-img/big-pexels-woman-tea.png";

import { Norican } from "next/font/google";
const norican = Norican({
  weight: "400",
  subsets: ["latin"],
  fallback: ["brush script m7"],
});

// all social media icons and links
const SocialMedia = () => {
  return (
    <div className="grid grid-rows-3 gap-9 lg:mt-24">
      <Link href="https://www.instagram.com/">
        <Image
          src={instaIcon}
          alt="Instagram social media icon with link to Instagram page"
        />
      </Link>

      <Link href="https://twitter.com/?lang=en">
        <Image
          src={twitterIcon}
          alt="Twitter social media icon with link to Twitter page"
        />
      </Link>

      <Link href="https://uk.linkedin.com/">
        <Image
          src={linkedInIcon}
          alt="LinkedIn social media icon with link to LinkedIn page"
        />
      </Link>
    </div>
  );
};

export default function Contact({title, firstPara, secondPara, email}) {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:justify-items-end lg:gap-x-3 lg:items-center">
      <div className="grid grid-flow-row justify-center mb-8 lg:justify-self-end lg:mb-0">
        <div className="max-w-md grid justify-items-center">

          {/* Contact title */}
          <div className="max-w-[12rem]">
            <div className={norican.className}>
              <h1 className="pb-4 text-6xl bg-gradient-to-r from-aqua to-lavender inline-block text-transparent bg-clip-text lg:text-7xl">
                {title}
              </h1>
            </div>
          </div>

          {/* text box */}
          <div className="grid grid-rows-1 border-cyan-300/90 rounded-lg border-2 lg:w-full">
            <p className="  text-2xl my-6 ml-8 mr-5 lg:text-3xl lg:leading-normal">
              {firstPara} <br /> {secondPara} <span className="text-cyan-300"> {email}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Social media icons with image */}
      <div className=" lg:max-w-xl lg:justify-self-start">
        <div className="flex justify-center gap-10 lg:gap-5">
          <div className="self-center">
            <SocialMedia />
          </div>
          <div className="lg:hidden">
            <Image
              src={profileImg}
              alt="woman drinks tea"
              height={302}
              width={235}
              priority
            />
          </div>
          <div className="hidden lg:flex">
            <Image src={profileImg} alt="woman drinks tea"/>
          </div>
        </div>
      </div>
    </div>
  );
}

