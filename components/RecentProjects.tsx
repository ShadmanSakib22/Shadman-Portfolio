"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { WobbleCard } from "./ui/wobble-card";

export const projects = [
  {
    id: 1,
    title: "Artisan Hub: Artist Patron Website",
    des: "Features- User Authentication, Blog Posts, Subscription, Tipping, Newsletter, Commission, Comment system.",
    img: "/artisanhub.jpg",
    iconLists: [
      "icons/html-icon.svg",
      "icons/css-icon.svg",
      "icons/bootstrap-icon.svg",
      "icons/js-icon.svg",
      "icons/jquery-icon.svg",
      "icons/php-icon.svg",
    ],
    link: "https://artisanhub-johndoe.000webhostapp.com/",
  },
  {
    id: 2,
    title: "Monster Burger: Burger Cafe Website",
    des: "Simple Burger Cafe Landing page website. Built Front-End with ReactJs & Tailwind.",
    img: "/burger-cafe.jpg",
    iconLists: ["icons/reactjs-icon.svg", "icons/tailwind-icon.svg"],
    link: "https://burger-cafe-three.vercel.app/",
  },
  {
    id: 3,
    title: "Tech Solutions: Remote Technical Support Website",
    des: "Ongoing Capstone Project: Landing page & Profile page completed. Working on Communication features & Remote Support.",
    img: "/techsolutions.jpg",
    iconLists: [
      "icons/reactjs-icon.svg",
      "icons/tailwind-icon.svg",
      "icons/js-icon.svg",
      "icons/firebase-icon.svg",
    ],
    link: "https://cse-499.vercel.app/",
  },
  {
    id: 4,
    title: "My Portfolio: This Page",
    des: "Built with the aid of Aceternity UI. Took the challenge of learning NextJs & TS to develop my portfolio.",
    img: "/portfolio.jpg",
    iconLists: [
      "icons/nextjs-icon.svg",
      "icons/tailwind-icon.svg",
      "icons/ts-icon.svg",
    ],
    link: "/shadmans.portfolio.vercel.com",
  },
];

const RecentProjects = () => {
  return (
    <div
      className="py-[5rem] bg-gray-50 dark:bg-gray-900 text-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="rProjects"
    >
      <h1 className="text-indigo-950 dark:text-white tracking-tight font-bold text-[32px] md:text-5xl text-center">
        Recent <span className="text-teal-200">projects:</span>
      </h1>
      <p className="dark:text-white text-indigo-950 mt-4 text-sm md:text-lg md:tracking-wide mx-auto text-center">
        https://github.com/ShadmanSakib22.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 mx-auto mt-4">
        {projects.map((item) => (
          <WobbleCard className="col-span-1 m-4 p-4 rounded-xl" key={item.id}>
            <img
              src={item.img}
              alt="cover"
              className="rounded-xl border-blue-200 dark:border-gray-600 border-2"
            />
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 dark:text-white text-indigo-950 mt-4">
              {item.title}
            </h1>
            <p className="text-sm line-clamp-2 dark:text-white text-indigo-900 mt-2">
              {item.des}
            </p>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center space-x-2">
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border dark:border-white/[.2] border-black rounded-full dark:bg-slate-900 bg-gray-50 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  >
                    <img src={icon} alt="icons" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <a
                  href={item.link}
                  target="_blank"
                  className="flex lg:text-xl md:text-xs text-sm tracking-tight dark:text-white text-indigo-950"
                >
                  Live Site
                </a>
                <FaLocationArrow className="ms-3" color="teal" />
              </div>
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;