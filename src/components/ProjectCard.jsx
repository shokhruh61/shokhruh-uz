import React from "react";
import { FaGithub } from "react-icons/fa";
import { PiBrowsersThin } from "react-icons/pi";
import FadeInUp from "./FadeInUp";

function ProjectCard({ image, title, stack, githubUrl, liveUrl }) {
  return (
    <div>
      <FadeInUp delay={0.1}>
        <div className="w-96 overflow-hidden rounded-xl bg-[#0f172a] text-white shadow-md duration-300 hover:rounded">
          <FadeInUp delay={0.1}>
            <div className="relative h-48 bg-[#1e293b]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-2 left-2 rounded bg-black/30 px-2 py-1 text-sm font-semibold text-white">
                {title}
              </div>
            </div>
          </FadeInUp>
          <div className="bg-[#0f172a] p-4">
            <FadeInUp delay={0.3}>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-gray-400">{stack}</p>
            </FadeInUp>

            <div className="mt-3 flex items-center gap-4">
              <FadeInUp delay={0.4}>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 transition hover:text-blue-600"
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
                  className="flex items-center gap-1 text-blue-400 transition hover:text-blue-600"
                >
                  <PiBrowsersThin />
                  <span className="text-sm">WebSite</span>
                </a>
              </FadeInUp>
            </div>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}

export default ProjectCard;
