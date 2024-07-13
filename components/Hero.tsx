import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BiCaretDown } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SpecButton from "./ui/SpecButton";

const Hero = () => {
  return (
    <section
      className="dark:bg-slate-950 h-[40rem] bg-blue-50 dark:bg-grid-white/[0.05] bg-grid-black/[0.2]"
      id="hero"
    >
      <div
        className="relative overflow-hidden px-4 mx-auto"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <Spotlight className="-top-40 left-0" fill="white" />
        <Spotlight className="top-0 left-full" fill="cyan" />
        <Spotlight className="bottom-0 left-0" fill="cyan" />

        <div className="h-[35rem] mx-auto max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col text-center md:text-left justify-center">
          <p className="uppercase tracking-widest text-xs dark:text-blue-100 text-indigo-900">
            Aspiring to build beautiful and interactive web experiences.
          </p>
          <div className="font-bold text-[32px] md:text-5xl lg:text-6xl">
            <div className="md:my-4 sm:my-2">
              <div className="dark:text-white text-indigo-950 leading-full tracking-wide">
                <div>Shadman Sakib: </div>
                <span className="text-cyan-300 whitespace-nowrap">
                  Web
                </span>
                <span className="text-teal-300"> Developer</span>
              </div>
            </div>
          </div>
          <p className="dark:text-white text-indigo-950 md:tracking-wider my-4 text-sm md:text-lg">
            Seeking for an Internship opportunity to contribute my skills, learn
            from professionals, and collaborate on innovative projects.
          </p>
          {/* Buttons - side by side */}
          <div className="inline-flex flex-col sm:flex-row gap-4 self-center md:self-start">
            <a href="#rProjects">
              <SpecButton
                title="See my work"
                icon={<BiCaretDown />}
                position="right"
              />
            </a>
            <a href="#contact">
              <SpecButton
                title="Get in Touch"
                icon={<BiCaretDown />}
                position="right"
              />
            </a>
          </div>
          {/* Socials - side by side */}
          <div className="flex justify-end mt-8 gap-4 text-2xl">
            <a
              href="https://github.com/ShadmanSakib22"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 dark:text-white text-indigo-950"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shadman-sakib-3b8bb3298/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 dark:text-white text-indigo-950"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sadmansakib10000@gmail.com"
              className="hover:text-teal-300 dark:text-white text-indigo-950"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
