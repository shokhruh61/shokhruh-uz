import React from "react";
import { FaArrowRight, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FadeInUp from "../components/FadeInUp";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

function About() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/projects");
  }

  return (
    <div className="mx-auto mt-28 max-w-[1200px]">
      <div className="flex flex-col gap-7">
        <FadeInUp delay={0.3}>
          <p className="text-center text-[18px] leading-[22px] font-medium duration-300 hover:text-blue-400 md:text-left">
            Assalomu alaykum, Men Mahmudov Shohruhbekman. Men 2008-yil
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
              className="w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <a
                href="https://www.w3schools.com/Html/"
                target="_blanked"
                rel="noopener noreferrer"
              >
                <FaHtml5 className="mx-auto h-10 w-10 text-2xl text-[#e34c26] duration-300" />
                Html
              </a>
            </li>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <li
              title="CSS"
              aria-label="CSS"
              className="w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <a
                href="https://www.w3schools.com/css/"
                target="_blanked"
                rel="noopener noreferrer"
              >
                <FaCss3 className="mx-auto h-10 w-10 text-2xl text-[#264de4] duration-300" />
                Css
              </a>
            </li>
          </FadeInUp>
          <FadeInUp delay={0.5}>
            <li
              title="JavaScript"
              aria-label="JavaScript"
              className="w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <a
                href="https://www.w3schools.com/js/"
                target="_blanked"
                rel="noopener noreferrer"
              >
                <FaJs className="mx-auto h-10 w-10 text-2xl text-[#f0db4f] duration-300" />
                JavaScript
              </a>
            </li>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <li
              title="React"
              aria-label="React"
              className="w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <a
                href="https://react.dev/"
                target="_blanked"
                rel="noopener noreferrer"
              >
                <RiReactjsFill className="mx-auto h-10 w-10 text-2xl text-[#61DBFB] duration-300" />
                React js
              </a>
            </li>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <li
              title="Tailwind CSS"
              aria-label="Tailwind CSS"
              className="w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <a href="https://tailwindcss.com/">
                <RiTailwindCssFill className="mx-auto h-10 w-10 text-2xl text-[#38BDF8] duration-300" />
                Tailwind.css
              </a>
            </li>
          </FadeInUp>
          <FadeInUp delay={0.8}>
            <li
              title="Figma"
              aria-label="Figma"
              className="w-48 rounded-xl border-2 pt-9 pr-16 pb-9 pl-16 text-center"
            >
              <a
                href="https://figma.com"
                target="_blanked"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              </a>
            </li>
          </FadeInUp>
        </ul>
      </div>
    </div>
  );
}

export default About;
