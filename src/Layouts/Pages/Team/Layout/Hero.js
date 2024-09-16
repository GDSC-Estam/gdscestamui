import React from 'react'

export default function Hero() {
  return (
    <main>
      {/* Hero */}
      <div class="relative isolate overflow-hidden bg-black py-10 lg:py-40 mt-24">
        <iframe src="https://lottie.host/embed/7adb81a5-81b0-427c-8f1e-28d70ec41274/Mpit9jWWx9.json" className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'></iframe>
        <div class="mx-auto max-w-[1500px] text-center px-6 lg:px-8">
          <div class="mx-auto max-w-screen lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Team</h2>
          </div>
          <div class="mx-auto mt-10 max-w-screen text-center lg:mx-0 lg:max-w-none">
            <div class="flex justify-center gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="/">Home <span aria-hidden="true"></span></a>
              <a >&rarr;<span aria-hidden="true"></span></a>
              <a href="/team">Team<span aria-hidden="true"></span></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
