import React from "react";
import { FaGithub, FaFilePdf } from "react-icons/fa";
import { PiBrowsersThin } from "react-icons/pi";
import FadeInUp from "./FadeInUp";

function ProjectCard({ image, title, stack, githubUrl, liveUrl }) {
  return (
    <FadeInUp delay={0.1}>
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-[#0f172a] shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:w-[90%] md:w-96 p-3 sm:p-4">
        {/* Image Section */}
        <FadeInUp delay={0.2}>
          <div className="relative h-48 sm:h-52 md:h-56 lg:h-60">
            <img
              src={image}
              alt={title}
              className="h-full w-full rounded-t-2xl object-cover"
            />
            <div className="absolute bottom-2 left-2 rounded bg-black/40 px-3 py-1 text-sm font-semibold text-white">
              {title}
            </div>
          </div>
        </FadeInUp>

        {/* Info Section */}
        <div className="p-5">
          <FadeInUp delay={0.3}>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="mt-1 text-sm text-gray-400">{stack}</p>
          </FadeInUp>

          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-4">
            <FadeInUp delay={0.4}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600"
              >
                <FaGithub />
                <span className="text-sm">GitHub</span>
              </a>
            </FadeInUp>
            <FadeInUp delay={0.5}>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600"
              >
                <PiBrowsersThin />
                <span className="text-sm">Website</span>
              </a>
            </FadeInUp>
            <FadeInUp delay={0.6}>
              <a
                href="/src/assets/pdf/Shoxruhbek-Mahmudov-Resume.pdf"
                download
                className="flex items-center gap-1 text-blue-400 hover:text-blue-600"
              >
                <FaFilePdf />
                <span className="text-sm">Rezyume</span>
              </a>
            </FadeInUp>
          </div>
        </div>
      </div>
    </FadeInUp>
  );
}

export default ProjectCard;
