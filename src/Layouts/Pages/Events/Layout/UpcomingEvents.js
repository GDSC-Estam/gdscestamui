import React from 'react'
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function UpcomingEvents() {
  return (
    <main>
      <div className="w-full h-screen bg">
        <div className="w-full h-screen flex flex-col items-center py-8">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl lg:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">Coming Soon..</h1>
            <div className="flex flex-col items-center space-y-4 mt-4">
              <p className="text-gray-300 uppercase text-sm">Notify me when you kick off</p>
              <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                <div className="flex sm:flex-row flex-col gap-5 w-full">
                  <form action="#"
                    className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-gray-600 shadow-lg shadow-gray-200/20 border border-gray-200 bg-gray-100 rounded-full ease-linear focus-within:bg-white  focus-within:border-blue-600">
                    <span className="min-w-max pr-2 border-r border-gray-200">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                      </svg>
                    </span>
                    <input type="email" name="" id="" placeholder="johndoe@gmail.com"
                      className="w-full py-3 outline-none bg-transparent" />
                    <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blueColor border-transparent hover:border-blueColor">
                      <span className="hidden sm:flex relative z-[5]">
                        Join GDSC Mailist
                      </span>
                      <span className="flex sm:hidden relative z-[5]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center space-x-4">
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
                href="https://linkedin.com/company/gdscestambj"
                className="text-blueColor transition-colors duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:gdscestambj@gmail.com"
                className="text-blueColor transition-colors duration-300 text-3xl"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
