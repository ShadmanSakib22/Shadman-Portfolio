"use client";

import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTheme } from "next-themes";

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 w-full py-4 bg-gray-100 dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight"
        >
          Shadman&apos;s <span className="text-lg">Portfolio</span>
        </a>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300">
            <a
              href="#about"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              Skills
            </a>
            <a
              href="#rProjects"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-gray-800 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setSidebar(!sidebar)}
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {sidebar && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-100 dark:bg-gray-900 shadow-md z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              Menu
            </h2>
            <button
              onClick={() => setSidebar(false)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              ✕
            </button>
          </div>
          <nav className="flex-grow flex flex-col p-4 space-y-4">
            <a
              href="#about"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Skills
            </a>
            <a
              href="#rProjects"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Contact
            </a>
          </nav>
          <p className="mt-auto p-4 text-center text-xs text-gray-400">
            <span>Shadman-Sakib Copyright © 2024</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
