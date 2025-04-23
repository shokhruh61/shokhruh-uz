import React from "react";

import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import FadeInUp from "../components/FadeInUp";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/about");
  }

  return (
    <div className="mx-auto mt-28 max-w-[1200px] px-4">
      <div className="flex flex-col items-center justify-center gap-10 text-center md:flex-row md:items-center md:justify-center md:text-center">
        <div className="flex flex-col items-center justify-center gap-7 p-5 text-center md:items-start md:p-4 md:text-left lg:p-2 xl:p-1">
          <FadeInUp delay={0.3}>
            <h1 className="mb-2 text-xl font-bold md:text-3xl lg:text-4xl">
              Assalomu alaykum, men Mahmudov Shohruhbekman
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.5}>
            <p className="text-xl">
              Men Veb dasturchiman. Maqsadim — veb-saytlar va veb-ilovalarni
              yaratish va boshqarish orqali mahsulot muvaffaqiyatiga hissa
              qo'shish.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <div className="mt-3 flex justify-center md:justify-start">
              <Button
                onClick={handleClick}
                className="btn btn-primary flex items-center gap-1"
              >
                Haqimda <FaArrowRight />
              </Button>
            </div>
          </FadeInUp>
          <div className="">
            <FadeInUp delay={0.8}>
              <h3 className="mb-5 text-xl font-medium">Ijtimoiy tarmoqlar</h3>
            </FadeInUp>
            <div className="mt-2 flex items-center gap-4">
              <FadeInUp delay={0.9}>
                <a
                  href="https://www.linkedin.com/in/shoxruh-mahmudov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin className="h-7 w-7" />
                </a>
              </FadeInUp>
              <FadeInUp delay={1}>
                <a
                  href="https://github.com/shokhruh61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <FaGithub className="h-7 w-7" />
                </a>
              </FadeInUp>
              <FadeInUp delay={1.1}>
                <a
                  href="https://shohruxmahmudov61@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <MdEmail className="h-7 w-7" />
                </a>
              </FadeInUp>
            </div>
          </div>
        </div>

        <FadeInUp delay={0.9}>
          <div className="p-5 md:p-4 lg:p-2 xl:p-1">
            <img
              src="https://picsum.photos/400/400?random=1"
              className="rounded-full shadow-lg"
              alt="Profile images "
              width={300}
              height={300}
            />
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default Home;
