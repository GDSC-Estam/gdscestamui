import React from 'react'
import { FaPhoneSquareAlt, FaAddressBook, FaPhone } from "react-icons/fa";
import { MdContacts, MdDriveFileRenameOutline, MdOutlineAlternateEmail, MdOutlineTopic } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Body() {
    return (
        <main>
            <section class="h-screen flex">
                <div class="hidden lg:flex w-full lg:w-1/2 contact_section justify-around items-center">
                    <div
                        class="bg-black opacity-20 inset-0 z-0"
                    >
                    </div>
                    <div class="w-full mx-auto px-20 flex-col items-center space-y-6 text-white">
                        {/* Phone */}
                        <div className='flex items-center gap-5'>
                            <div className='text-5xl'>
                                <FaPhoneSquareAlt />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Phone Number</p>
                                <a href='+239640047232' className='font-bold'>+(229) 640 047 232</a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className='flex items-center gap-5'>
                            <div className='text-5xl'>
                                <FaAddressBook />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Address</p>
                                <a href='#'>ESTAM University</a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className='flex gap-5'>
                            <div className='text-5xl'>
                                <MdContacts />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p>Contact Info</p>
                                <a href='mailto:gdscestambj@gmail.com'>gdscestambj@gmail.com</a>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="w-full flex items-center justify-start">
                            <div className="flex items-center space-x-4">
                                <a
                                    href="https://github.com/GDSC-Estam"
                                    className="text-blueColor transition-colors duration-300 text-3xl"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://x.com/gdscestambj"
                                    className="text-white bg-blueColor p-2 rounded-full transition-colors duration-300 text-3xl"
                                >
                                    <FaSquareXTwitter />
                                </a>
                                <a
                                    href="https://linkedin.com/company/gdscestambj"
                                    className="text-white bg-blueColor p-2 rounded-full transition-colors duration-300 text-3xl"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="mailto:gdscestambj@gmail.com"
                                    className="text-white bg-blueColor p-2 rounded-full transition-colors duration-300 text-3xl"
                                >
                                    <MdEmail />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div class="w-full px-0 md:px-32 lg:px-24">
                        <form class="bg-white rounded-md shadow-2xl p-10">
                            <h1 class="text-gray-800 font-bold text-2xl mb-1 py-10 text-center">Send Us A Message</h1>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <div className='text-xl text-gray-400'>
                                    <MdDriveFileRenameOutline />
                                </div>
                                <input id="name" class=" pl-2 w-full outline-none border-none" type="text" name="name" placeholder="Your Name" />
                            </div>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <div className='text-xl text-gray-400'>
                                    <MdOutlineAlternateEmail />
                                </div>
                                <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" />
                            </div>
                            <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <div className='text-lg text-gray-400'>
                                    <FaPhone />
                                </div>
                                <input id="phone" class=" pl-2 w-full outline-none border-none" type="phone" name="phone" placeholder="Phone Number" />
                            </div>
                            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <div className='text-xl text-gray-400'>
                                    <MdOutlineTopic />
                                </div>
                                <input class="pl-2 w-full outline-none border-none" type="text" name="subject" id="subject" placeholder="Subject" />

                            </div>
                            <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">

                                <textarea class="pl-2 w-full outline-none border-none" type="text" name="Text" id="Text" placeholder="Enter Message" />

                            </div>
                            <button type="submit" class="block w-full bg-blueColor mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
