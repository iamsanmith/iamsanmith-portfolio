"use client";

import React from "react";
import { motion } from "framer-motion";
import { facts } from "../data/userData";
import { Mail, MapPin, Github, Linkedin, Sparkles, Lightbulb, Star, Video, Users, Film } from "lucide-react";
import GlobalBackground from "../components/Background";

const factIcons = [
  <Sparkles key="sparkles" className="text-yellow-400 drop-shadow-md" />,
  <Lightbulb key="lightbulb" className="text-blue-400 drop-shadow-md" />,
  <Star key="star" className="text-pink-400 drop-shadow-md" />,
  <Video key="video" className="text-green-400 drop-shadow-md" />,
  <Users key="users" className="text-purple-400 drop-shadow-md" />,
  <Film key="film" className="text-red-400 drop-shadow-md" />,
];

const boxVariants = {
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
  },
};

const About = () => {
  return (
    <>
      <GlobalBackground />
      <section
        id="about"
        className="w-full px-4 py-10 flex flex-col items-center justify-center min-h-screen bg-transparent text-foreground overflow-hidden relative z-10"
      >
        {/* Profile Card with frosted glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center rounded-2xl shadow-xl p-8 mb-8 max-w-xl w-full border border-blue-200 dark:border-blue-800 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md"
        >
          <motion.div
            className="h-32 w-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg bg-background flex items-center justify-center mb-4"
            style={{ transform: 'none' }}
            initial={{ scale: 0.95, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
            whileInView={{ scale: 1, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(0,0,0,0.22)' }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            <img
              src="/assets/profilephoto.jpeg"
              alt="Sanmith S"
              className="h-full w-full object-cover object-center"
            />
          </motion.div>
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-1">Sanmith S</h2>
          <p className="text-lg text-blue-600 dark:text-blue-300 font-semibold mb-2">Video Encoding Specialist & Developer</p>
          <div className="flex gap-4 mt-2">
            <a href="mailto:sanmiths39@gmail.com" className="text-blue-500 hover:text-blue-700" title="Email"><Mail size={22} /></a>
            <a href="https://github.com/iamsanmith" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-blue-600" title="GitHub"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/iamsanmith" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900" title="LinkedIn"><Linkedin size={22} /></a>
            <span className="text-green-500 flex items-center" title="Location"><MapPin size={22} className="mr-1" /> Bengaluru</span>
          </div>
        </motion.div>

        {/* About Summary - minimal, elegant font and improved text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="max-w-2xl text-center mb-10"
        >
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-light leading-relaxed font-sans" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
            Driven by curiosity and creativity, I craft solutions that blend technology and artistry. My work spans video encoding, software, and creative direction—always with a focus on clarity, efficiency, and impact. I believe in making tech beautiful, useful, and human.
          </p>
        </motion.div>

        {/* Enhanced Facts Grid at the bottom with reliable entrance animations and frosted glass effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full">
          {facts.map((fact, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? boxVariants.left : boxVariants.right}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0] }}
              className="flex flex-col items-center justify-center gap-3 px-8 py-6 rounded-2xl shadow-2xl border border-blue-200 dark:border-blue-700 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md text-lg font-semibold text-gray-800 dark:text-gray-100 hover:shadow-blue-300/40 dark:hover:shadow-blue-900/40"
            >
              <motion.span
                animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }}
                className="mb-2"
              >
                {factIcons[i % factIcons.length]}
              </motion.span>
              <span className="text-center leading-snug">{fact}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
