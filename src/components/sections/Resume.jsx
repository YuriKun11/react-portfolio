import React from 'react'

import {FaFileAlt } from "react-icons/fa"

const Resume = () => {
  return (
    <div>   
    <section className="bg-black text-white flex flex-col items-center justify-center p-6 mt-10">
          <p className="text-lg font-semibold mb-4">Thank you for scrolling!</p>
          <button className="flex items-center bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition duration-300">
            <FaFileAlt className="mr-2" />
            Resume
          </button>
        </section>

</div>
  )
}

export default Resume