import React from 'react';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <section id='tech' className="bg-black text-white flex-grow flex flex-col items-center justify-start p-6">
      <div className="w-full max-w-4xl mx-auto h-px bg-[#1E1E1E] mb-10"></div>
      <div className="tech-container w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-left">Tech</h2>

        {/* Tech Grid with 3 Rows */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Row 1 */}
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
              alt="Express"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Express</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Tailwind</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="React"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">React JS</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
              alt="Node"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Node.js</p>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
              alt="PHP"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">PHP</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
              alt="MySQL"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">MySQL</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="Java"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Java</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="Python"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Python</p>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Bootstrap</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
              alt="Git"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">Git</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">MongoDB</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width="40"
              height="40"
              className="mb-4"
            />
            <p className="text-white text-center font-semibold">JavaScript</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
