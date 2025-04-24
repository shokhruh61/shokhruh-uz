import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Gmail from "../assets/images/gmail-icon.svg";
import FadeInUp from "../components/FadeInUp";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/about");

  return (
    <div className="mx-auto mt-20 max-w-[1200px] px-4 py-12">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* LEFT COLUMN - Texts */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <FadeInUp delay={0.3}>
            <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl">
              Assalomu alaykum, men Mahmudov Shohruhbekman
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.5}>
            <p className="text-lg text-gray-600 md:text-xl dark:text-gray-300">
              Men Veb dasturchiman. Maqsadim — veb-saytlar va ilovalar yaratish
              orqali foydalanuvchi tajribasini oshirish va biznesga hissa
              qo‘shish.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.7}>
            <Button
              onClick={handleClick}
              className="btn btn-primary mx-auto flex w-fit items-center gap-2 md:mx-0"
            >
              Haqimda <FaArrowRight />
            </Button>
          </FadeInUp>

          <FadeInUp delay={0.9}>
            <div className="mt-4">
              <h3 className="mb-3 text-lg font-semibold">Ijtimoiy tarmoqlar</h3>
              <div className="flex justify-center gap-5 md:justify-start">
                <a
                  href="https://www.linkedin.com/in/shoxruh-mahmudov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 transition hover:text-blue-800"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/shokhruh61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition hover:text-gray-700"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="mailto:shohruxmahmudov61@gmail.com"
                  className="transition hover:opacity-80"
                >
                  <img src={Gmail} alt="gmail icon" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* RIGHT COLUMN - Image */}
        <FadeInUp delay={0.9}>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/400/400?random=1"
              alt="Profile"
              className="h-64 w-64 rounded-full border-4 border-green-500 object-cover shadow-xl"
            />
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default Home;
