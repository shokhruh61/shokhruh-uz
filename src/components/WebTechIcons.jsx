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
  return (
    <div>
      <div>
        <FadeInUp delay={1}>
          <h2 className="mt-14 text-center text-2xl font-extrabold md:text-left">
            Texnologiyalar
          </h2>
          <div className="mt-3 hidden w-28 rounded-md border-2 border-green-800 text-center text-2xl font-bold md:block"></div>
        </FadeInUp>

        <ul className="mb-16 mt-16 grid grid-cols-2 gap-9 p-5 sm:grid-cols-4 md:grid-cols-5 md:justify-start lg:grid-cols-6 xl:grid-cols-7">
          <FadeInUp delay={0.3}>
            <li
              title="HTML"
              aria-label="HTML"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <FaHtml5 className="mx-auto h-10 w-10 text-2xl text-[#e34c26] duration-300" />
              Html
            </li>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <li
              title="CSS"
              aria-label="CSS"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <FaCss3 className="mx-auto h-10 w-10 text-2xl text-[#264de4] duration-300" />
              Css
            </li>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <li
              title="SCSS"
              aria-label="SCSS"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <FaSass className="mx-auto h-10 w-10 text-2xl text-[#e4269b] duration-300" />
              Sass
            </li>
          </FadeInUp>
          <FadeInUp delay={0.5}>
            <li
              title="JavaScript"
              aria-label="JavaScript"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <FaJs className="mx-auto h-10 w-10 text-2xl text-[#f4d92e] duration-300" />
              JavaScript
            </li>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <li
              title="React"
              aria-label="React"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <RiReactjsFill className="mx-auto h-10 w-10 text-2xl text-[#61DBFB] duration-300" />
              React js
            </li>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <li
              title="Tailwind CSS"
              aria-label="Tailwind CSS"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <RiTailwindCssFill className="mx-auto h-10 w-10 text-2xl text-[#38BDF8] duration-300" />
              Tailwind.css
            </li>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <li
              title="Botstrap"
              aria-label="Botstrap"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <FaBootstrap className="mx-auto h-10 w-10 text-2xl text-[#9e38f8] duration-300" />
              Bootstrap
            </li>
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <li
              title="Figma"
              aria-label="Figma"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <svg
                viewBox="0 0 100 140"
                className="mx-auto h-10 w-10 text-2xl text-[#F24E1E] duration-300"
              >
                <circle cx="30" cy="30" r="20" fill="#F24E1E" />
                <circle cx="70" cy="30" r="20" fill="#FF7262" />
                <circle cx="30" cy="70" r="20" fill="#A259FF" />
                <circle cx="70" cy="70" r="20" fill="#1ABCFE" />
                <circle cx="30" cy="110" r="20" fill="#0ACF83" />
              </svg>
              Figma
            </li>
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <li
              title="Git"
              aria-label="Git"
              className="flex w-36 flex-col items-center gap-0.5 rounded-xl border-2 p-4 text-center"
            >
              <FaGitAlt className="mx-auto h-10 w-10 text-2xl text-[#ef5412] duration-300" />
              Git
            </li>
          </FadeInUp>
        </ul>
      </div>
    </div>
  );
}

export default WebTechIcons;
