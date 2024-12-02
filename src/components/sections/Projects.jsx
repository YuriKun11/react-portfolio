import React from 'react';
import { motion } from 'framer-motion';
import { FaPhp, FaCss3Alt, FaDatabase, FaReact } from 'react-icons/fa';
import schedsys from '../../assets/images/schedsys.png';
import dswd from '../../assets/images/dswd.png';
import clone from '../../assets/images/clone.png';
import dashboard from '../../assets/images/dashboard.png';
import attendance from '../../assets/images/attendance.png';


const Projects = () => {
  return (
    <section  id='projects'  className="bg-black text-white flex-grow flex flex-col items-center justify-start p-6">
      <motion.div
        className="w-full max-w-4xl mx-auto h-px bg-[#1E1E1E] mb-10"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="projects-container w-full max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-white text-left">Projects</h2>

        {/* Projects Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
           <img
              src={schedsys}
              alt="Scheduling System"
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Scheduling System</h3>
            <p className="text-gray-400 text-sm mt-2">
              Scheduling System for the Employees of Jollibee Bauang
            </p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm flex items-center">
                <FaPhp className="mr-2 text-purple-500" /> PHP
                <FaCss3Alt className="ml-4 mr-2 text-blue-400" /> CSS
                <FaDatabase className="ml-4 mr-2 text-yellow-400" /> MySQL
              </p>
              <a href="#" className="block mt-4 text-purple-600 hover:text-purple-400">
                View Project
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={dswd}
              alt="Supply Inventory Management System"
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Inventory System</h3>
            <p className="text-gray-400 text-sm mt-2">
              Supply Inventory Management System (SIMS) for DSWD FO-1
            </p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm flex items-center">
                <FaPhp className="mr-2 text-purple-500" /> PHP
                <FaCss3Alt className="ml-4 mr-2 text-blue-400" /> CSS
                <FaDatabase className="ml-4 mr-2 text-yellow-400" /> MySQL
              </p>
              <a href="#" className="block mt-4 text-purple-600 hover:text-purple-400">
                View Project
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={attendance}
              alt="Attendance Monitoring"
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white whitespace-nowrap">Attendance System</h3>
            <p className="text-gray-400 text-sm mt-2">Full Stack Php Attendance Monitoring System</p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm flex items-center">
                <FaPhp className="mr-2 text-purple-500" /> PHP
                <FaCss3Alt className="ml-4 mr-2 text-blue-400" /> CSS
                <FaDatabase className="ml-4 mr-2 text-yellow-400" /> MySQL
              </p>
              <a href="https://github.com/YuriKun11/simple-attendance-monitoring" className="block mt-4 text-purple-600 hover:text-purple-400">
                View Project
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={clone}
              alt="Simple Web Designer"
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Simple Web Designer</h3>
            <p className="text-gray-400 text-sm mt-2">
              Design your website!
            </p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm flex items-center">
                <FaReact className="mr-2 text-cyan-400" /> React JS
              </p>
              <a href="#" className="block mt-4 text-purple-600 hover:text-purple-400">
                View Project
              </a>
            </div>
          </motion.div>
    
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between h-96"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <img
              src={dashboard}
              alt="Dashboard Template"
              className="w-full h-40 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-white">Dashboard Template</h3>
            <p className="text-gray-400 text-sm mt-2">React + Tailwind Template</p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm flex items-center">
                <FaReact className="mr-2 text-cyan-400" /> React JS
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                  className="w-5 h-5 ml-4 mr-2"
                />
                Tailwind CSS
              </p>
              <a 
                href="https://github.com/YuriKun11/React-tailwind" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-4 text-purple-600 hover:text-purple-400"
              >
                View Project
              </a>
            </div>
          </motion.div>

        

        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
