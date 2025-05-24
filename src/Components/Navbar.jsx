import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 👈 Added for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define route paths
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Designs", path: "/designs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-lg shadow-lg z-50 border-b border-teal-300/40">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo with Elegant Calligraphy */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 drop-shadow-lg"
          style={{ fontFamily: 'Great Vibes, cursive' }}
        >
          <Link to="/">Priyanshi.Designs</Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {routes.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer text-gray-300 hover:text-teal-300 transition transform hover:translate-y-1 group"
            >
              <Link to={item.path}>
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <div className={`h-1 w-6 bg-teal-300 mb-1 transition transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`h-1 w-6 bg-teal-300 mb-1 transition ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-1 w-6 bg-teal-300 transition transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden flex flex-col items-center space-y-4 py-4 bg-black/60 backdrop-blur-lg shadow-md border-t border-teal-400/40"
        >
          {routes.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)} // close menu after clicking
                className="text-lg font-medium text-gray-300 hover:text-teal-300 cursor-pointer transform hover:scale-105"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
