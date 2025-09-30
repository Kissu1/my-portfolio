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
      <header className="py-4">
        <Nav logo="Rp" />
      </header>
      <main className={inter.className}>
        <section className="intro">
          <About
            welcome="Hello, I am"
            name="Rico Posas"
            // mobile avatar
            introduction="a CS student with a strong interest in software development and data science."
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

              <div>
                {/* project 1 text */}
                <Projects
                  title="Certificates"
                  date="2025"
                  info="Introduction to Data Science"
                />

                {/* single project 1 image */}
                <div className="grid justify-center mb-11">
                  <Image
                    src="/images/projects-img/cert.png"
                    alt="certificate"
                    height={300}
                    width={400}
                    className="object-contain"
                  />
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
            email="ricoposas@gmail.com"
          />
        </section>
      </main>
      <footer className={inter.className}></footer>
    </div>
  );
}
