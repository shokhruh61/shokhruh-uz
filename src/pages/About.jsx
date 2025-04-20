import React from "react";
import { FaArrowRight, FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FadeInUp from "../components/FadeInUp";
import WebTechIcons from "../components/WebTechIcons";

function About() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/projects");
  }

  return (
    <div className="mx-auto mt-28 max-w-[1200px]">
      <div className="flex flex-col items-center gap-7 p-12 sm:items-start sm:p-4 md:p-3 lg:p-2 xl:p-1">
        <FadeInUp delay={0.3}>
          <p className="text-center text-[18px] font-medium leading-[22px] duration-300 hover:text-blue-400 md:text-left">
            Assalomu alaykum, men Mahmudov Shohruhbekman. Men 2007-yil
            O'zbekiston Respublikasining Farg'ona viloyatida tug'ilganman.
            Yoshligimdan texnologiyaga bo'lgan qiziqishim meni veb
            dasturchilikka yetakladi. Men foydalanuvchilar uchun qulay va
            samarali dasturlar yaratishni yaxshi ko'raman, bu esa meni bu sohada
            doimiy o'sishga ilhomlantiradi.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="text-center text-[18px] font-medium leading-[22px] duration-300 hover:text-blue-400 md:text-left">
            Dasturlash — bu meni qiziqtiradigan jarayon, chunki u nafaqat ijodiy
            tafakkurni talab qiladi, balki har bir muammo uchun eng samarali
            yechimni izlashni o'rgatadi. Maqsadim — ko'p funksionallikka ega,
            zamonaviy dizayn bilan birga foydalanuvchilarga qulay interfeys
            yaratish.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.5}>
          <p className="text-center text-[18px] font-medium leading-[22px] duration-300 hover:text-blue-400 md:text-left">
            Men asosan React, Tailwind CSS va boshqa ilg‘or texnologiyalar
            yordamida veb-saytlar ishlab chiqaman. Maqsadim — tezkor va qulay
            foydalanuvchi interfeysi yaratish, dizayn va funksionallik o‘rtasida
            muvozanatni saqlash.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <p className="text-center text-[18px] font-medium leading-[22px] duration-300 hover:text-blue-400 md:text-left">
            Veb dasturlashdagi o‘sishim davomida, foydalanuvchilarga intuitiv va
            qulay mahsulotlar yaratishga intilaman. Shu bilan birga, yangi
            texnologiyalarni o‘rganib, o‘z bilimlarimni kengaytirishga harakat
            qilaman.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.7}>
          <p className="text-center text-[18px] font-medium leading-[22px] duration-300 hover:text-blue-400 md:text-left">
            Agar mening loyihalarim sizni qiziqtirsa, Loyihalar sahifasiga
            tashrif buyurishingiz mumkin!
          </p>
        </FadeInUp>

        <FadeInUp delay={0.8}>
          <Button
            onClick={handleNavigate}
            className="btn btn-secondary flex items-center justify-center gap-1 duration-300 hover:bg-primary hover:text-white md:justify-start"
          >
            Loyihalar <FaArrowRight />
          </Button>
        </FadeInUp>
      </div>
      
      <WebTechIcons />
    </div>
  );
}

export default About;
