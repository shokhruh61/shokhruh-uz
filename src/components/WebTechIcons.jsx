import React from "react";
import FadeInUp from "./FadeInUp";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaSass,
} from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

function WebTechIcons() {
  const icons = [
    {
      title: "HTML",
      icon: <FaHtml5 className="h-10 w-10 text-[#e34c26]" />,
      label: "Html",
    },
    {
      title: "CSS",
      icon: <FaCss3 className="h-10 w-10 text-[#264de4]" />,
      label: "Css",
    },
    {
      title: "SCSS",
      icon: <FaSass className="h-10 w-10 text-[#e4269b]" />,
      label: "Sass",
    },
    {
      title: "JavaScript",
      icon: <FaJs className="h-10 w-10 text-[#f4d92e]" />,
      label: "JavaScript",
    },
    {
      title: "React",
      icon: <RiReactjsFill className="h-10 w-10 text-[#61DBFB]" />,
      label: "React js",
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill className="h-10 w-10 text-[#38BDF8]" />,
      label: "Tailwind.css",
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className="h-10 w-10 text-[#9e38f8]" />,
      label: "Bootstrap",
    },
    {
      title: "Figma",
      icon: (
        <svg viewBox="0 0 100 140" className="h-10 w-10">
          <circle cx="30" cy="30" r="20" fill="#F24E1E" />
          <circle cx="70" cy="30" r="20" fill="#FF7262" />
          <circle cx="30" cy="70" r="20" fill="#A259FF" />
          <circle cx="70" cy="70" r="20" fill="#1ABCFE" />
          <circle cx="30" cy="110" r="20" fill="#0ACF83" />
        </svg>
      ),
      label: "Figma",
    },
    {
      title: "Git",
      icon: <FaGitAlt className="h-10 w-10 text-[#ef5412]" />,
      label: "Git",
    },
  ];

  return (
    <div className="mt-20">
      <FadeInUp delay={0.5}>
        <h2 className="text-center text-3xl font-extrabold md:text-left">
          Texnologiyalar
        </h2>
        <div className="mx-auto mt-2 hidden h-1 w-24 rounded-full bg-gradient-to-r from-green-600 to-green-800 md:mx-0 md:block" />
      </FadeInUp>

      <div className="mb-10 mt-12 flex flex-wrap justify-center gap-5 md:justify-start">
        {icons.map(({ title, icon, label }, index) => (
          <FadeInUp delay={0.3 + index * 0.1} key={title}>
            <div
              title={title}
              aria-label={title}
              className="flex min-w-[120px] max-w-[140px] flex-col items-center gap-2 rounded-xl border border-gray-300 p-4 text-center shadow-md transition duration-300 hover:scale-105 dark:border-gray-600"
            >
              <div className="h-10 w-10">{icon}</div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}

export default WebTechIcons;
