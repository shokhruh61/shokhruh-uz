import React from "react";
import ProjectCard from "../components/ProjectCard";
import Invoice from "../assets/images/invoice.png";
import UnSplash from "../assets/images/unsplash.png";
function Projects() {
  return (
    <div className="mx-auto mt-28 flex max-w-[1200px] flex-wrap items-center justify-center gap-10 px-4">
      <ProjectCard
        className={"flex gap-2"}
        image={Invoice}
        title="my web-invoice"
        stack="React, Tailwind, Framer Motion, redux-toolkit"
        githubUrl="https://github.com/shokhruh61/invoice.git"
        liveUrl="https://invoice-ten-pi.vercel.app\"
      />
      <ProjectCard
        className={"flex gap-2"}
        image={UnSplash}
        title="my web-unsplash"
        stack="React, Tailwind, redux-toolkit, auth, fetch, unsplash api"
        githubUrl="https://github.com/shokhruh61/unsplash.git"
        liveUrl="https://unsplash-esbk.vercel.app/"
      />
    </div>
  );
}

export default Projects;
