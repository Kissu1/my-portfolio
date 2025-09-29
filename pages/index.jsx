import Image from "next/image";

import Nav from "../components/nav";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], fallback: ["arial"] });

export default function Home() {
  return (
    <div>
      <header>
        <Nav logo="YN" />
      </header>
      <main className={inter.className}>
        <section className="intro">
          <About
            welcome="Hello, I am"
            name="Your Name"
            // mobile avatar
            introduction="I enjoy creating amazing experiences for people"
            callToActionButton="Get In Touch"
            // desktop avatar
          />
        </section>
        <section className="projects" id="my-projects">
          <section className="project-one ">
            <div
              className="md:mt-20 lg:grid lg:grid-cols-2 lg:justify-items-end lg:gap-x-6 lg:items-center
            "
            >
              {/* project 1 image */}
              <div className="grid justify-center lg:order-last lg:justify-self-start">
                <Image
                  className="lg:max-w-[36rem]"
                  src="/images/projects-img/big-unsplash-party.png"
                  alt="image of a celebration"
                  height={597}
                  width={701}
                  priority
                />
              </div>
              <div>
                {/* project 1 text */}
                <Projects
                  title="Project 1"
                  date="June 2022"
                  info="Lorem ipsum dolor sit amet consectetur. A posuere in senectus urna diam egestas nisl est malesuada. Ultricies faucibus placerat consequat nisl sapien sem ipsum arcu."
                />

                {/* more project 1 images */}
                <div className="grid grid-rows-1 justify-items-center mb-11 ">
                  <div className="grid grid-cols-2 max-w-xxs gap-x-3 md:max-w-xl  lg:pl-6 ">
                    <Image
                      className="h-[6.7rem]
                      md:h-[13.4rem] lg:h-[13rem]"
                      src="/images/projects-img/big-pexels-laptop-notes.png"
                      alt="image of a laptop with a notebook, pen and cup of coffee"
                      height={213}
                      width={303}
                    />
                    <Image
                      src="/images/projects-img/big-pexels-camera.png"
                      alt="image of a camera on a tripod"
                      height={213}
                      width={276}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="project-two">
            <div className="grid justify-center md:mt-20  lg:grid-cols-2 lg:justify-items-end lg:gap-x-6 lg:items-center lg:mb-40 lg:mt-40">
              {/* project 2 image */}
              <div className="lg:order-last  lg:justify-self-start">
                <Image
                  className="lg:max-w-[36rem]"
                  src="/images/projects-img/big-unsplash-event-dinner.png"
                  alt="image of an empty room with tables set up for an event"
                  height={438}
                  width={579}
                />
              </div>

              {/* project 2 text */}
              <div className="lg:justify-self-start">
                <Projects
                  title="Project 2"
                  date="Sept 2021"
                  info="Lorem ipsum dolor sit amet consectetur. Ultricies faucibus placerat consequat nisl sapien sem ipsum arcu."
                />
              </div>

              {/* project 2 video */}
              <iframe
              className="w-full lg:max-w-xl lg:h-[100%] lg:row-span-2 lg:pl-6 lg:order-first"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/__O1eATrXI0?si=hgeWL_Hc3Lp_EtiZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
          <section className="project-three">
            <div className="md:mt-20 md:mb-20 md lg:grid lg:grid-cols-1 lg:mb-40">
              {/** project 3 background image(s)
               * background image.png was left as support for older browsers which don't display the image.webp
               */}
              <div
                className="bg-[url('/images/projects-img/big-pexels-conference-image.webp')] bg-[url('/images/projects-img/big-pexels-conference-image.png')]  bg-center grid grid-cols-1 mt-11 mb-11 md:h-[49.25rem] lg:w-[72rem] lg:ml-6 lg:justify-self-center lg:rounded-md"
                loading="lazy"
                aria-label="background image of an auditorium filled with business people"
              >
                {/* project 3 text and black overlay to make text stand out */}
                <div className="bg-black rounded-[1rem] px-6 bg-opacity-[55%] py-20 lg:rounded-sm">
                  <div className="grid grid-flow-row justify-items-center">
                    <Projects
                      title="Project 3"
                      date="Dec 2020"
                      info="Lorem ipsum dolor sit amet consectetur. A posuere in senectus urna diam egestas nisl est malesuada."
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="contact" id="contact-me">
          <Contact
            title="Contact"
            firstPara="Interested in creating a new project with me?"
            secondPara="You can contact me on any social media platform or send me an email at "
            email="yourname@email.com"
          />
        </section>
      </main>
      <footer className={inter.className}>
        <h2 className="text-center mt-10 mb-4 text-xs">
          Copyright 2022 Your Name
        </h2>
      </footer>
    </div>
  );
}
