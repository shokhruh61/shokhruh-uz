import { FaEnvelope, FaPhone, FaTelegramPlane } from "react-icons/fa";
import FadeInUp from "../components/FadeInUp"; // joylashgan joyiga qarab importni o'zgartir

function Contact() {
  return (
    <section className="bg-base-200 min-h-screen px-4 py-16 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <FadeInUp>
          <h2 className="text-primary mb-6 text-center text-3xl font-bold sm:text-4xl">
            Bog'lanish
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="mb-12 text-center text-base text-gray-500">
            Har qanday savollar, takliflar yoki hamkorlik uchun bemalol yozing.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Contact Info */}
          <FadeInUp delay={0.3}>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <FaEnvelope className="text-primary" />
                <span>shohruxmahmudov61@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <FaPhone className="text-primary" />
                <span>+998 93-490-61-68</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <FaTelegramPlane className="text-primary" />
                <a
                  href="https://t.me/makhmudov618"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @makhmudov618
                </a>
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.4}>
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Ismingiz
                </label>
                <input
                  type="text"
                  placeholder="Ism"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Xabar
                </label>
                <textarea
                  rows="4"
                  placeholder="Xabaringizni yozing..."
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Yuborish
              </button>
            </form>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

export default Contact;
