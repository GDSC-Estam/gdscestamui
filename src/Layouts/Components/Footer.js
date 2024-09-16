import React from 'react'
import { FaConnectdevelop, FaArrowUpRightDots, FaSquareXTwitter, FaLinkedin, FaGithub  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Logo } from '../../Assets'

export default function Footer() {
  return (
    <main>
      <section className="bg-black py-40">
        <div
          className="max-w-lg bg-black px-4 mx-auto text-left md:max-w-none md:text-center"
        >
          <h1
            className="text-3xl font-extrabold leading-10 tracking-tight text-left text-white text-center sm:leading-none md:text-6xl text-4xl lg:text-7xl"
          >
            <span
              className=" bg-clip-text text-transparent bg-gradient-to-r from-blueColor via-yellowColor to-greenColor md:inline-block"
            >Join <span className="bg-clip-text text-transparent bg-gradient-to-r from-greenColor via-blueColor to-redColor"> GDSC ESTAM </span> </span>
          </h1>
          <div
            className="mx-auto rounded-lg font-black mt-20 text-zinc-400 md:mt-12 md:max-w-xl text-center lg:text-lg"
          >
            <button className="border text-sm text-white py-4 px-20 rounded-full" >
              Join
            </button>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-[1500px] px-4 pt-8 mx-auto sm:px-6 lg:px-0">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <img className="rounded-full" src={Logo} width="300" height="60" />
            </div>

            <div className='lg:mt-0 mt-5'>
              {/* Socials */}
              <ul className='text-deepYellow text-3xl flex lg:justify-between justify-center items-center gap-x-10'>
                <a
                  href="https://github.com/GDSC-Estam"
                  className="text-blueColor transition-colors duration-300 text-3xl"
                >
                  <FaGithub  />
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
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
