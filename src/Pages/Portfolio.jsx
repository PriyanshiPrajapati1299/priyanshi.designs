import React, { useState } from "react";
import profileImage from "../Images/Photo.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { projects, services, certificates, qualifications } from "../assets/data";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Resume from '../Images/Resume.pdf'

const Portfolio = () => {
  const [languages] = useState([
    { name: "Hindi", level: 100 },
    { name: "English", level: 90 },
    { name: "Bhojpuri", level: 70 },
  ]);

  const [skills] = useState([
    { name: "Figma", level: 90 },
    { name: "Canva", level: 100 },
    { name: "Adobe Suite", level: 85 },
    { name: "Wix Studio", level: 95 },
    { name: "React.js", level: 70 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap", level: 85 },
    { name: "Node.js", level: 60 },
    { name: "HTML", level: 100 },
    { name: "CSS", level: 100 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 50 },
    { name: "MS Office Suite", level: 100 },
    { name: "Power BI", level: 60 },

  ]);

  return (
    
    <section className="relative w-full pt-20 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-4 md:p-10 flex flex-col md:flex-row">
     
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute w-full h-full bg-gradient-to-b from-black via-gray-900 to-black opacity-30"
          animate={{ scaleY: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>
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


      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-800 p-5 rounded-lg z-10 shadow-xl mb-8 md:mb-0 mt-10">
        <img src={profileImage} alt="Profile" className="rounded-full w-28 mx-auto mb-4 border-4 border-teal-400 shadow-md" />
        <h2 className="text-center text-xl font-bold">Priyanshi Prajapati</h2>
        <p className="text-center text-sm text-gray-400">Frontend Developer | UI/UX Designer | Graphic Designer</p>

        <div className="mt-6">
          <h3 className="text-md font-semibold mb-3 border-b border-teal-400 pb-1">Languages</h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm w-1/2">{lang.name}</span>
                <CircularProgressbar
                  value={lang.level}
                  text={`${lang.level}%`}
                  className="w-12 h-12"
                  styles={buildStyles({
                    pathColor: "#22d3ee",
                    textColor: "#ffffff",
                    trailColor: "#1f2937",
                  })}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-md font-semibold mb-3 border-b border-teal-400 pb-1">Skills</h3>
          <div className="space-y-3">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-mono text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                    className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
  <h3 className="text-md font-semibold mb-4 border-b border-teal-400 pb-1 flex items-center gap-2">
    
    Extra-Curricular Activities
  </h3>

  <div className="relative border-s-2 border-teal-500 ml-4 pl-6 space-y-8">

    {/* Timeline Item 1 */}
    <div className="relative">
      <div className="absolute top-1 left-[-34px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
      <h4 className="text-sm font-semibold text-white">Magazine Head - KIPM College</h4>
      <p className="text-xs text-gray-400">Creative and editorial team lead</p>
    </div>

    {/* Timeline Item 2 */}
    <div className="relative">
      <div className="absolute top-1 left-[-34px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
      <h4 className="text-sm font-semibold text-white">Quiz Competition Coordinator</h4>
      <p className="text-xs text-gray-400">Hosted and organized quiz events</p>
    </div>

    {/* Timeline Item 3 */}
    <div className="relative">
      <div className="absolute top-1 left-[-34px] w-4 h-4 rounded-full bg-blue-500 border-2 border-white"></div>
      <h4 className="text-sm font-semibold text-white">Placement Sub-Coordinator (2024-25)</h4>
      <p className="text-xs text-gray-400">Helped manage placement activities</p>
    </div>
  </div>
</div>


      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-5 z-10">
        <div className="text-center mt-5">
          <h1 className="text-3xl font-extrabold text-teal-400">Explore My Creative Universe</h1>
          <p className="text-blue-300">Interactive UI/UX & Modern Web Experiences</p>
        </div>

        <div className="flex flex-wrap justify-center mt-5 gap-4">
          <a href={Resume} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md shadow-md transition">Download Resume</a>
          <a href="mailto:piyanshiprajapaticse@gmail.com" className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md shadow-md transition">Hire Me</a>
        </div>

        {/* Qualifications */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Education & Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 p-5 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold text-white">{qual.title}</h3>
                <p className="text-sm text-teal-300">{qual.branch} | {qual.duration}</p>
                <p className="text-sm text-gray-400 mt-1">{qual.institution}</p>
                <p className="text-sm text-gray-400 italic">Marks: {qual.marks}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
  <h2 className="text-2xl font-bold text-teal-400 mb-4">My Services</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service, index) => {
      const Icon = service.icon;
      return (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-teal-600 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-3 mb-2">
            {Icon && <Icon className="text-2xl text-teal-300" />}
            <h3 className="text-xl font-semibold text-teal-300">{service.name}</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed ">{service.description}</p>
        </motion.div>
      );
    })}
  </div>
</section>

        {/* Projects */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-5 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1 mb-2">{project.description}</p>
                <a href={project.link} className="text-teal-300 hover:underline text-sm">View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-teal-400 mb-4">Certificates & Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gray-900 p-5 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{cert.platform} | {cert.date}</p>
                <a href={cert.link} className="text-teal-300 hover:underline text-sm" target="_blank">View Certificate</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Portfolio;