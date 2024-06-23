import { HoverEffect } from "./ui/card-hover-effect";

export default function Skills() {
  return (
    <div
      className="dark:bg-gray-950 bg-blue-50 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] pt-[5rem] pb-[2.5rem]"
      id="skills"
    >
      <h1 className="text-indigo-950 dark:text-white tracking-tight font-bold text-[32px] md:text-5xl text-center">
        My <span className="text-teal-200">skills:</span>
      </h1>
      <p className="dark:text-white text-indigo-950 mt-4 text-sm md:text-lg md:tracking-wide mx-auto text-center">
        TechStacks I use for Development & my experience with them.
      </p>

      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "HTML, CSS, JS",
    description: [
      "Solid foundation on the basics of web development.",
      "Continuously improving on plain JavaScript and starting to use TypeScript.",
      "This site was built with TypeScript.",
    ],
    icons: ["html-icon", "css-icon", "js-icon", "ts-icon"],
  },
  {
    title: "TailwindCSS, Bootstrap",
    description: [
      "Extensive knowledge of both CSS frameworks.",
      "Preference depends on project requirements.",
      "This site is built upon Aceternity UI harnessing power of TailwindCSS",
    ],
    icons: ["tailwind-icon", "bootstrap-icon"],
  },
  {
    title: "ReactJs, NextJs, jQuery",
    description: [
      "Good grasp of ReactJs with experience building several projects.",
      "Fairly new to NextJs but have a good understanding of its basics and advantages—this site is built on NextJs.",
      "Very good understanding and experience with utilizing Ajax.",
    ],
    icons: ["reactjs-icon", "nextjs-icon", "jquery-icon"],
  },
  {
    title: "Other Experiences",
    description: [
      "Proficient in backend development using PHP.",
      "Skilled in handling real-time databases (Firebase) and relational databases (MySQL).",
      "Leveraged RESTful APIs and gateways to build applications that consume external data.",
    ],
    icons: ["php-icon", "firebase-icon", "mysql-icon"],
  },
];
