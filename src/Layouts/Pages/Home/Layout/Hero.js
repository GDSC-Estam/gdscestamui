import React, { useState, useRef } from 'react'
import { GDSC, Logo } from '../../../../Assets'
import '../../../../Layouts/Style.css'

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const imageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      setRotateY((prevY) => prevY + deltaX * 0.2); 
      setRotateX((prevX) => prevX - deltaY * 0.2);

      setStartX(e.clientX);
      setStartY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  return (
    <main>
      <section className="relative py-32 lg:py-60 bg-marianaBlue">
        <div
          className="mx-auto lg:max-w-[1443px] w-full px-5 sm:px-10 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-5xl
            font-bold text-gray-900">ESTAM University <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 from-20% via-blue-600 via-30% to-green-600">GDSC </span>
              Benin Republic Chapter
            </h1>
            <p className="mt-8 text-black">
              We are a growing community loaded with creative developers who are passionate about creating an impact by exploring different technologies and building meaningful projects that solve real world problems.
              <br /><br />
              Join us on this thrilling journey!! Let's capture remarkable memories together ✨
            </p>
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

          <div className="flex flex-1 lg:w-full lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              ref={imageRef}
              src={GDSC}
              alt="Hero image"
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-contain lg:max-h-none max-h-96 spin-image"
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
              onMouseDown={handleMouseDown} 
              onMouseMove={handleMouseMove} 
              onMouseUp={handleMouseUp} 
              onMouseLeave={handleMouseUp}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
