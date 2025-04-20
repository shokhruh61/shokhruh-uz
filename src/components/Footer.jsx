import React from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from "../assets/images/mylogo.png";

function Footer() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow">{/* Sahifadagi boshqa kontent */}</div>
      <div class="bg-black px-2 py-3">
        <footer class="mx-auto flex max-w-[1000px] flex-col items-center justify-center">
          <div class="mb-4 flex gap-6 sm:gap-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-4 text-white sm:w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/shoxruh-mahmudov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-4 text-white sm:w-8" />
            </a>
            <a
              href="https://shohruxmahmudov61@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="w-4 text-white sm:w-8" />
            </a>
          </div>
          <h3 class="font-montserrat text-center text-sm font-semibold text-white sm:text-base">
            © 2025 Shohruh<span class="font-medium">All Rights Reserved.</span>
          </h3>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
