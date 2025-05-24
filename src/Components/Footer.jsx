import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full py-10 px-6 text-gray-300 overflow-hidden bg-black/100 backdrop-blur-xl shadow-sm z-50 border-t-1 border-white/40">

      {/* Glowing Dots Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-teal-400 rounded-full blur-md opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.6, 1] }}
            transition={{ repeat: Infinity, duration: Math.random() * 4 + 2 }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-white tracking-wide"
        >
          Let’s Connect & Create Something Amazing 🎨✨
        </motion.h2>

        <p className="mt-2 text-gray-400 max-w-md">
          Follow me on social platforms and stay updated with my latest designs and creative journeys.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 mt-6">
          <motion.a
            href="https://github.com/PriyanshiPrajapati1299"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-teal-400 hover:text-white transition duration-300"
          >
            <FaGithub size={26} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/priyanshii12"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-teal-400 hover:text-white transition duration-300"
          >
            <FaLinkedin size={26} />
          </motion.a>
          <motion.a
            href="https://x.com/PriyanshiPraj10"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-teal-400 hover:text-white transition duration-300"
          >
            <FaXTwitter size={26} />
          </motion.a>
        </div>

        {/* Footer Bottom Text */}
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-white font-medium">Priyanshi</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
