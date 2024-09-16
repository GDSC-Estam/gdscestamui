import React from 'react'
import { FaConnectdevelop, FaArrowUpRightDots, FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidBookReader } from "react-icons/bi";
import { GDSC } from '../../../../Assets';

export default function Body() {
  return (
    <main>
      {/* Our Aim */}
      <section className="mx-auto max-w-[1443px]">
        <h1 className='text-center mb-16 underline font-bold text-3xl text-blueColor'>Our Aim</h1>
        <div className='w-full flex justify-center'>
          <div className="flex justify-center mx-auto lg:flex-row flex-col gap-20 row-gap-5">
            <div className="relative overflow-hidden transition duration-300 transform border rounded-full shadow-sm hover:scale-105 group hover:shadow-xl h-40 w-40 bg-blueColor">
              <div className="relative p-5 rounded-sm">
                <div className="flex flex-col mb-2 justify-center items-center lg:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 mr-2 text-5xl text-white">
                    <FaConnectdevelop />
                  </div>
                </div>
                <p className="mb-2 text-xl font-bold text-white text-center">
                  Connect
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden transition duration-300 transform border rounded-full shadow-sm hover:scale-105 group hover:shadow-xl h-40 w-40 bg-blueColor">
              <div className="relative p-5 rounded-sm">
                <div className="flex flex-col mb-2 justify-center items-center lg:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 mr-2 text-5xl text-white">
                    <BiSolidBookReader />
                  </div>
                </div>
                <p className="mb-2 text-xl font-bold text-white text-center">
                  Learn
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden transition duration-300 transform border rounded-full shadow-sm hover:scale-105 group hover:shadow-xl h-40 w-40 bg-blueColor">
              <div className="relative p-5 rounded-sm">
                <div className="flex flex-col mb-2 justify-center items-center lg:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 mr-2 text-5xl text-white">
                    <FaArrowUpRightDots />
                  </div>
                </div>
                <p className="mb-2 text-xl font-bold text-white text-center">
                  Grow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="px-4 py-16 mx-auto max-w-[1443px] lg:px-0 lg:py-32">
        <h1 className='text-center mb-16 underline font-bold text-3xl text-blueColor'>About Us</h1>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className='w-full'>
            <iframe src="https://lottie.host/embed/73c3c945-acd6-4da2-bcba-37da1654637a/sRqLH3cMLH.json" className="object-contain w-full h-56 rounded sm:h-96"></iframe>
          </div>

          <div className="max-w-[1443px] w-full flex flex-col lg:justify-start justify-center">
            <h5 className="mb-4 lg:text-4xl text-xl font-extrabold leading-none inline-flex gap-3 lg:justify-start justify-between items-center uppercase lg:text-start text-center">
              Welcome to <img src={GDSC} alt='logo' className='w-10 h-auto' /> DSC ESTAM
            </h5>
            <hr className='mb-5 border-gray-300' />
            <p className="mb-6 text-black lg:text-start text-center">
              <span className='font-bold text-xl '>What is GDSC?</span>
              <br /><br />
              <span className='font-mediumbold text-lg'>Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.</span>
            </p>
            <p className="mb-6 text-gray-900 lg:text-start text-center">
              Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. Google Developer Student Clubs is a program supported by Google Developers.
            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex lg:justify-start justify-center items-center space-x-4">
            <a
                href="https://github.com/GDSC-Estam"
                className="text-blueColor transition-colors duration-300 text-3xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/gdscestambj"
                className="text-blueColor transition-colors duration-300 text-3xl"
              >
                <FaSquareXTwitter />
              </a>
              <a
                href="htps://linkedin/company/gdscestambj"
                className="text-blueColor transition-colors duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:gdscestam@gmail.com"
                className="text-blueColor transition-colors duration-300 text-3xl"
              >
                <MdEmail />
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
