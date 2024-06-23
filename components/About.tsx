"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function About() {
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          dotsClass: "slick-dots",
        },
      },
    ],
  };

  return (
    <section
      className="w-full pt-[5rem] pb-[2.5rem] bg-gray-50 dark:bg-gray-900 text-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="about"
    >
      <h1 className="text-indigo-950 dark:text-white tracking-tight font-bold text-[32px] md:text-5xl ">
        About <span className="text-teal-200">me:</span>
      </h1>
      <p className="dark:text-white text-indigo-950 mt-4 text-sm md:text-lg md:tracking-wide mx-auto">
        Hi, I'm Shadman Sakib! Passionate front-end developer from Dhaka. <br />
        Bilingual (English & Bengali) thanks to growing up abroad.
      </p>
      <div className="py-10 mx-auto px-8">
        <Slider {...settings}>
          <Card
            desc={[
              "Staying upto date with new AI Trends to leverage them for higher efficiency and productivity.",
              "Continue building upon my foundational knowledge of HTML, CSS, and JavaScript.",
              "Look into new frameworks in the market and build Experience on them.",
              "Focus on optimization techniques, debugging, and a user-centric approach to create exceptional web experiences.",
            ]}
            covering="My Goal"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-emerald-700 overflow-hidden rounded-2xl"
              dotSize={2}
            />
          </Card>
          <Card
            desc={[
              "Strong HTML, CSS.",
              "Good grasp of JavaScript.",
              "Experience with modern frameworks.",
              "Experience with REST APIs.",
              "Responsive design skills.",
              "Problem-solving ability.",
              "Attention to detail.",
              "Quick learning ability.",
              "Knowledge of optimization techniques.",
              "Back-End knowledge.",
              "Knowledge of scrum & agile methodologies.",
              "Good handle of browser developer tools.",
              "Experience working in teams as both lead and support.",
            ]}
            covering="My Strengths"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-pink-900 overflow-hidden rounded-2xl"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
          <Card
            desc={[
              "Online Gaming & Reading are some of favorite pass-times.",
              "Online Gaming in particular has had a big part in my career choice. My first experience with REST API's is when I made a Website that tracked in-game Markets for my guild.",
              "While working on personal projects like these, I realized early on that web development was the right career path for me.",
            ]}
            covering="My Hobbies"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600 overflow-hidden rounded-2xl"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </Slider>
      </div>
    </section>
  );
}

const Card = ({
  desc,
  covering,
  children,
}: {
  desc: string[];
  covering: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl shadow-xl dark:bg-gradient-to-tl dark:from-slate-950 dark:to-gray-800 bg-gradient-to-tl from-white to-blue-100 border-gray-500 dark:border-slate-700 group/canvas-card flex items-center justify-center border-4 border-double w-4/5 mx-auto p-4 h-[30rem] relative"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="z-20 absolute dark:text-blue-200 text-indigo-950 font-extrabold tracking-tight text-xl text-center group-hover/canvas-card:opacity-0 transition duration-200">
        {covering}
        <img src="cursor.svg" className="w-2/5 m-auto mt-4" />
      </div>
      <ul className="text-sm text-left dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
        {desc.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
