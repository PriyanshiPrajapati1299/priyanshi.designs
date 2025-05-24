import { motion } from "framer-motion";
import profileImage from "../Images/Photo.jpeg";
import "@fontsource/montserrat";
import "@fontsource/playfair-display";
import "@fontsource/great-vibes";

const About = () => {
  return (
    <section className="relative w-full min-h-screen pt-12 flex flex-col items-center justify-center px-10 text-white overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      
      {/* Floating Sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-40 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
            transition={{ repeat: Infinity, duration: Math.random() * 3 + 2, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-5xl bg-gray-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl border border-cyan-500 text-center z-10"
      >
        <img
          src={profileImage}
          alt="Priyanshi"
          className="w-40 h-40 rounded-full mx-auto border-4 border-cyan-400 shadow-lg"
        />
        <h1 className="mt-4 text-4xl font-bold text-cyan-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>Priyanshi Prajapati</h1>
        <p className="text-xl text-gray-300 mt-2" style={{ fontFamily: 'Playfair Display, serif' }}>
          Passionate Frontend & MERN Developer | UI/UX Enthusiast | Graphic Designer
        </p>
        <p className="text-lg text-gray-400 mt-6 max-w-4xl mx-auto leading-relaxed">
          From childhood, creativity has been my constant companion. What started as an interest in art and design evolved into a deep passion for frontend development and UI/UX. I breathe life into pixels, crafting interactive experiences that blend aesthetics with functionality. With expertise in React, Three.js, and Tailwind, I transform ideas into seamless digital experiences, bringing a touch of magic to every project. My journey is one of continuous learning, where innovation meets imagination.
        </p>
        <motion.a
          href="/portfolio"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-8 inline-block px-10 py-4 text-md font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-xl hover:from-cyan-400 hover:to-blue-500 transition transform hover:translate-y-1"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          View My Portfolio
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;