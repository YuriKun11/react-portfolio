import React from 'react';
import { motion } from 'framer-motion';  // Import framer-motion
import Tech from './sections/Tech';
import Resume from './sections/Resume';
import Projects from './sections/Projects';

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Design() {

  return (
    <div id='home' className="min-h-screen flex flex-col pt-20">
      <section className="bg-black text-white flex-grow flex flex-col items-center justify-center p-6">
        {/* --------------- Header Section ---------------*/}
        <header className="text-start mb-10 w-full max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold mb-2"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Hello, I’m Yuri
          </motion.h1>
          <motion.h2 
            className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#b878fc] to-[#c03d73]"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            Frontend Developer
          </motion.h2>
          <div className="mt-4 flex flex-wrap gap-2">
          <motion.button 
  className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-600 transition duration-300"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  <FaLinkedin className="mr-2" />
  LinkedIn
</motion.button>
<motion.a 
  href="https://github.com/YuriKun11"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md mr-2 hover:bg-purple-600 transition duration-300"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.8, delay: 0.7 }}
>
  <FaGithub className="mr-2" />
  Github
</motion.a>

<motion.button 
  className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.8, delay: 0.9 }}
>
  <FaEnvelope className="mr-2" />
  Mail
</motion.button>

          </div>
          <motion.p 
            className="mt-4 text-lg mx-auto text-left"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1.1 }}
          >
            Computer Science student eager to apply skills in software and web development and gain hands-on experience through real-world projects.
          </motion.p>
        </header>

        {/* --------------- Vertical line --------------- */}
        <motion.div 
          className="w-full max-w-4xl mx-auto h-px bg-[#1E1E1E] mb-10"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* --------------- TIMELINE --------------- */}
        <motion.div 
          className="timeline-container w-full max-w-4xl mx-auto"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-white text-left">Timeline</h2>
          <div className="w-full grid grid-cols-9 px-2">
            {/* Intern Timeline (Right) */}
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-start">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-black text-center top-0"></div>
            </div>
            <motion.div 
              className="col-span-4 w-full h-full"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="w-full h-full rounded-md">
                <h1 className="text-white text-xl font-medium">2024</h1>
                <p className="text-gray-100 sm:text-sm text-xs pb-10">System Development Assistant & File Management Intern</p>
              </div>
            </motion.div>

            {/* College Timeline Item (Left) */}
            <motion.div 
              className="col-span-4 w-full h-full"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="w-full h-full rounded-md text-right">
                <h1 className="text-white text-xl font-medium">2021 - Present</h1>
                <p className="text-gray-100 sm:text-sm text-xs pb-10">Bachelor of Science in Computer Science</p>
              </div>
            </motion.div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-start">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-black text-center top-0"></div>
            </div>
            <div className="col-span-4 w-full h-full"></div>

            {/* Senior High Timeline Item (Right) */}
            <div className="col-span-4 w-full h-full"></div>
            <div className="relative col-span-1 w-full h-full flex justify-center items-start">
              <div className="h-full w-1 bg-white"></div>
              <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-black text-center top-0"></div>
            </div>
            <motion.div 
             
              className="col-span-4 w-full h-full"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1, delay: 1.6 }}
            >
              <div className="w-full h-full rounded-md">
                <h1 className="text-white text-xl font-medium">2019 - 2021</h1>
                <p className="text-gray-100 sm:text-sm text-xs pb-10">IT in Mobile App & Web Development</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </section>

      <Projects />
      <Tech />
      <Resume />

    </div>
  );
}

export default Design;
