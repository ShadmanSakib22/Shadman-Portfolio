import React from "react";

const Education = () => {
  return (
    <div
      className="dark:bg-gray-950 bg-blue-50 dark:bg-grid-white/[0.05] bg-grid-black/[0.2] pt-[5rem] pb-[2.5rem]"
      id="education"
    >
      <h1 className="text-indigo-950 dark:text-white tracking-tight font-bold text-[32px] md:text-5xl text-center">
        Edu<span className="text-teal-200">cation:</span>
      </h1>
      <p className="dark:text-white text-indigo-950 mt-4 text-sm md:text-lg md:tracking-wide mx-auto text-center">
        My current Education Progress &amp; Achievements.
      </p>

      <div className="mt-10 w-4/5 mx-auto space-y-8 text-left">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-gray-500 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-indigo-950 dark:text-white">
            CSE | BSc in Computer Science and Engineering (BSCSE)
          </h2>
          <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">
            North South University
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Present</p>
          <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
            <li>
              Specialized in Network Trail, focusing on Internet &amp; Web
              Technology, Data Communication &amp; Network
            </li>
            <li>
              Minored in Artificial Intelligence Trail, emphasizing Machine
              Learning
            </li>
            <li>Achieved a CGPA of 3+ with completion of 130 credits</li>
            <li>
              Currently completing internship requirement for graduation in
              final semester
            </li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md border border-gray-500 hover:scale-105 transition-transform">
          <h2 className="text-xl font-bold text-indigo-950 dark:text-white">
            Edexcel | O-levels
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Received Daily Star Award for achieving 6 A&apos;s in O-Levels.
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            English Language (A*), Mathematics-A (A*), Mathematics-B (A*),
            Physics (A*), Biology (A), Chemistry (A).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
