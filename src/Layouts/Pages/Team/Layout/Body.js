import React from 'react'
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Kavod } from '../../../../Assets';

export default function Body() {
  return (
    <main>
      {/* 2024 Team */}
      <section className="px-4 py-16 mx-auto max-w-[1443px] lg:px-0 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className='w-full'>
            <iframe src="https://lottie.host/embed/38471583-ab30-4f7d-a6ac-d8519fb26541/DTWmvqeOsx.json" className="object-contain w-full h-56 rounded sm:h-96"></iframe>
          </div>

          <div className="max-w-[1443px] w-full flex flex-col lg:justify-start justify-center lg:mt-10">
            <h5 className="mb-4 lg:text-4xl text-xl font-extrabold leading-none inline-flex gap-3 lg:justify-start justify-center items-center uppercase lg:text-start text-center">
              The Board of 2024-25
            </h5>
            <hr className='mb-5 border-gray-300' />
            <p className="mb-6 text-black lg:text-start text-center">
              <span className='font-mediumbold text-lg'><span className='italic'>"Talent wins games, but teamwork and intelligence win championships."</span> – Michael Jordan.</span>
            </p>
            <p className="mb-6 text-gray-900 lg:text-start text-center">
              We at Google Developer Student Club, ESTAM University believe that what a strong group of people can accomplish together is much larger and far greater than what an individual can achieve alone.
              <br /><br />
              Our Core team has left no stone unturned and constantly worked to help each member grow by sharing useful learning resources, organizing events on different technologies and providing guidance for exploring various domains of their interest.
            </p>
          </div>

        </div>
      </section>
      {/* Core Team */}
      <div className="px-4 py-16 mx-auto max-w-[1443px] md:px-24 lg:px-0 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            GDSC ESTAM Board of 2024-25
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ubongabasi Joseph
                </p>
                <p className="mb-4 text-xs text-gray-100">GDSC ESTAM Lead</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="https://github.com/GDSC-Estam"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ?????
                </p>
                <p className="mb-4 text-xs text-gray-100">Co Lead</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ???
                </p>
                <p className="mb-4 text-xs text-gray-100">Program Manager</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ?????
                </p>
                <p className="mb-4 text-xs text-gray-100">Media Lead</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ?????
                </p>
                <p className="mb-4 text-xs text-gray-100">Branch Manager 1</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ???
                </p>
                <p className="mb-4 text-xs text-gray-100">Branch Manager 2</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ????
                </p>
                <p className="mb-4 text-xs text-gray-100">Dev Lead</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                // src={Kavod}
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  ????
                </p>
                <p className="mb-4 text-xs text-gray-100">Co Dev Lead</p>
                <div className="flex items-center justify-center space-x-3">
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaSquareXTwitter />
                  </a>
                  <a
                    href="/"
                    className="text-blueColor transition-colors duration-300 text-3xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
