import React from "react";
import { FaArrowRight, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FadeInUp from "../components/FadeInUp";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaSass, FaGitAlt } from "react-icons/fa";

function About() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/projects");
  }

  return (
    <div className="mx-auto mt-28 max-w-[1200px]">
      <div className="flex flex-col items-center gap-7 p-12 sm:items-start sm:p-4 md:p-3 lg:p-2 xl:p-1">
        <FadeInUp delay={0.3}>
          <p className="text-center text-[18px] leading-[22px] font-medium duration-300 hover:text-blue-400 md:text-left">
            Assalomu alaykum, Men Mahmudov Shohruhbekman. Men 2007-yil
            O'zbekiston Respublikasining Farg'ona viloyatida tug'ilganman.
            Yoshligimdan texnologiyaga bo'lgan qiziqishim meni veb
            dasturchilikka yetakladi. Men foydalanuvchilar uchun qulay va
            samarali dasturlar yaratishni yaxshi ko'raman, bu esa meni bu sohada
            doimiy o'sishga ilhomlantiradi.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className="text-center text-[18px] leading-[22px] font-medium duration-300 hover:text-blue-400 md:text-left">
            Dasturlash - bu meni qiziqtiradigan jarayon, chunki u nafaqat ijodiy
            tafakkurni talab qiladi, balki har bir muammo uchun eng samarali
            yechimni izlashni o'rgatadi. Dastur yaratishda asosiy maqsadim -
            ko'p funksionallikka ega, zamonaviy dizayn bilan birga
            foydalanuvchilarga qulay foydalanish hususiyatini taqdim etadigan
            mahsulot yaratishdir.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <p className="text-center text-[18px] leading-[22px] font-medium duration-300 hover:text-blue-400 md:text-left">
            Men asosan React, Tailwind CSS va boshqa ilg'or texnologiyalar
            yordamida veb-saytlar ishlab chiqaman. Maqsadim - veb saytlarda
            tezkor va qulay foydalanuvchi interfeysi yaratish, shuningdek,
            dizayn va funksionallik o'rtasida muvozanatni saqlashdir.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.5}>
          <p className="text-center text-[18px] leading-[22px] font-medium duration-300 hover:text-blue-400 md:text-left">
            Veb dasturlashdagi o'sishim davomida, foydalanuvchilarga intuitiv va
            qulay mahsulotlar yaratishga intilaman. Bu bilan birga, yangi
            texnologiyalarni o'rganib, o'z bilimlarimni kengaytirishga harakat
            qilaman.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.7}>
          <p className="text-center text-[18px] leading-[22px] font-medium duration-300 hover:text-blue-400 md:text-left">
            Agar mening loyihalarim sizni qiziqtirsa, Loyihalar sahifasiga
            tashrif buyurishingiz mumkin!
          </p>
        </FadeInUp>

        <FadeInUp delay={0.9}>
          <Button
            onClick={handleNavigate}
            className="btn btn-secondary hover:btn-primary flex items-center justify-center gap-1 duration-300 md:justify-start"
          >
            Loyihalar <FaArrowRight />
          </Button>
        </FadeInUp>
      </div>

      <div>
        <FadeInUp delay={1}>
          <h2 className="mt-14 text-center text-2xl font-extrabold md:text-left">
            Texnologiyalar
          </h2>
          <div className="mt-3 hidden w-28 rounded-md border-2 border-green-800 text-center text-2xl font-bold md:block"></div>
        </FadeInUp>

        <ul className="mt-16 mb-16 flex flex-wrap justify-center gap-9 md:justify-start">
          <FadeInUp delay={0.3}>
            <li
              title="HTML"
              aria-label="HTML"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <FaHtml5 className="mx-auto h-10 w-10 text-2xl text-[#e34c26] duration-300" />
              Html
            </li>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <li
              title="CSS"
              aria-label="CSS"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <FaCss3 className="mx-auto h-10 w-10 text-2xl text-[#264de4] duration-300" />
              Css
            </li>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <li
              title="SCSS"
              aria-label="SCSS"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <FaSass className="mx-auto h-10 w-10 text-2xl text-[#e4269b] duration-300" />
              Sass
            </li>
          </FadeInUp>
          <FadeInUp delay={0.5}>
            <li
              title="JavaScript"
              aria-label="JavaScript"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <FaJs className="mx-auto h-10 w-10 text-2xl text-[#f4d92e] duration-300" />
              JavaScript
            </li>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <li
              title="React"
              aria-label="React"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <RiReactjsFill className="mx-auto h-10 w-10 text-2xl text-[#61DBFB] duration-300" />
              React js
            </li>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <li
              title="Tailwind CSS"
              aria-label="Tailwind CSS"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <RiTailwindCssFill className="mx-auto h-10 w-10 text-2xl text-[#38BDF8] duration-300" />
              Tailwind.css
            </li>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <li
              title="Botstrap"
              aria-label="Botstrap"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <FaBootstrap className="mx-auto h-10 w-10 text-2xl text-[#9e38f8] duration-300" />
              Bootstrap
            </li>
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <li
              title="Figma"
              aria-label="Figma"
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
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
              className=" flex flex-col items-center gap-0.5 w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
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

export default About;
