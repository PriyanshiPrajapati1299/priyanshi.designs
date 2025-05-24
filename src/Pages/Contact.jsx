import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaBehance,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Glowing Dots Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-teal-400 rounded-full blur-sm opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.5, 1] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 4 + 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-teal-400 mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Get in Touch 🚀
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Whether you have a question, a project idea, or just want to say hi — my inbox is always open. Let’s connect and create together!
        </p>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-16 grid md:grid-cols-2 gap-10 text-left">
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Reach Me At</h3>
            <ul className="text-gray-200 space-y-3">
  <li>
    ✉️ <span className="font-medium text-white">Email:</span>{" "}
    <a
      href="mailto:priyanshiprajapaticse@gmail.com"
      className="text-blue-200 hover:underline"
    >
      priyanshiprajapaticse@gmail.com
    </a>
  </li>
  <li>
    📍 <span className="font-medium text-white">Location:</span> Gorakhpur, Uttar Pradesh, India
  </li>
</ul>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-400 mb-2">Follow Me</h4>
              <div className="flex flex-wrap gap-4 text-xl">
                <a
                  href="https://www.linkedin.com/in/priyanshii12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-white transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/PriyanshiPrajapati1299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-white transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://x.com/PriyanshiPraj10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-white transition"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <p className="text-gray-300 text-sm max-w-md">
              Want to share your idea or feedback? Use the form below and let’s talk!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrZxlPn3jIF39PVScU9j9neTYAe2ZTUOzjcCQRCXeQUJKZ_Q/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 rounded-full shadow-lg transition duration-300"
            >
              Fill the Google Form 💬
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
