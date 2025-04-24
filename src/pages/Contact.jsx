import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaTelegramPlane } from "react-icons/fa";
import FadeInUp from "../components/FadeInUp";
import { toast } from "react-toastify";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygaykgo", // EmailJS service ID
        "template_punbob7", // EmailJS template ID
        formRef.current,
        "Fz4FSjAzpU5Rnugvm", // EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Xabaringiz muvaffaqiyatli yuborildi!", result, {
            position: toast.POSITION.TOP_RIGHT,
          });
          formRef.current.reset();
        },
        (error) => {
          toast.error("Xabar yuborishda xatolik yuz berdi!", error, {
            position: toast.POSITION.TOP_RIGHT,
          });
          formRef.current.reset();
        },
      );
  };

  return (
    <section className="min-h-screen bg-base-200 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <FadeInUp delay={0.1}>
          <h2 className="mb-6 text-center text-3xl font-bold text-primary sm:text-4xl">
            Bog'lanish
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mb-12 text-center text-base text-gray-500">
            Har qanday savollar, takliflar yoki hamkorlik uchun bemalol yozing.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-6">
            <FadeInUp delay={0.3}>
              <div className="flex items-center gap-4 text-lg">
                <FaEnvelope className="text-primary" />
                <a
                  href="https:/shohruxmahmudov61@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shohruxmahmudov61@gmail.com
                </a>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <div className="flex items-center gap-4 text-lg">
                <FaPhone className="text-primary" />
                <span>+998 93-490-61-68</span>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.5}>
              <div className="flex items-center gap-4 text-lg">
                <FaTelegramPlane className="text-primary" />
                <a
                  href="https://t.me/makhmudov618"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @makhmudov618
                </a>
              </div>
            </FadeInUp>
          </div>

          {/* Contact Form */}
          <form
            className="space-y-6 sm:col-span-1"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <FadeInUp delay={0.3}>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Ismingiz
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ism"
                  className="input-bordered input w-full"
                  required
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input-bordered input w-full"
                  required
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.5}>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Xabar
                </label>
                <textarea
                  name="message"
                  placeholder="Xabar"
                  className="input-bordered textarea h-32 w-full"
                  required
                ></textarea>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <button type="submit" className="btn btn-primary w-full">
                Yuborish
              </button>
            </FadeInUp>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
