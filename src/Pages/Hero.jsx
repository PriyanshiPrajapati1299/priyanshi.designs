import { motion } from "framer-motion";
import heroImage from "src/Images/photo.jpeg";
import "@fontsource/montserrat"; // Modern Font
import "@fontsource/playfair-display"; // Elegant Serif Font
import "@fontsource/dancing-script"; // Calligraphy Font
import "@fontsource/great-vibes"; // Handwritten Calligraphy
import About from "./About";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center px-10 text-white overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
        
        {/* Wavy Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            className="absolute w-full h-full bg-gradient-to-b from-blue-500 to-transparent opacity-30"
            animate={{ scaleY: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </div>

        {/* Glitter Effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-yellow-100 rounded-full opacity-40 blur-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
              transition={{ repeat: Infinity, duration: Math.random() * 3 + 2, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Left Content */}
        <div className="md:w-1/2 text-left z-10">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-5xl md:text-6xl font-extrabold leading-tight uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="absolute -top-1 left-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white opacity-20">
              Elevate Designs
            </span>
            Elevate <span className="text-purple-400">Designs</span>,<br /> 
            Ignite <span className="text-transparent" style={{ WebkitTextStroke: "2px #60A5FA" }}>Creativity</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Crafting stunning visuals that captivate and inspire. Unleash bold, modern designs that redefine digital experiences.
          </motion.p>
          
          <motion.a 
            href="/designs" 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 inline-block px-8 py-3 text-lg font-semibold bg-gradient-to-r from-teal-400 to-blue-500 rounded-full shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-blue-600 transition transform hover:translate-y-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore My Work
          </motion.a>
        </div>

        {/* Right Content - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="md:w-1/2 flex justify-center z-10"
        >
          <img src={heroImage} alt="Hero" className="w-3/4 max-w-sm md:max-w-lg rounded-lg shadow-xl border-4 border-teal-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <About />
    </>
  );
};

export default Hero;
