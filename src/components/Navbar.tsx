"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import "../styles/globals.css"
import logo from "../../public/logo.png"

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={"./CarLogo.svg"} width={50} height={50} alt="brand" />
                {/* <h2 className="text-2xl font-bold text-ThemeColor ">Home</h2> */}
              </Link>


              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>

              
            </div>
          <div>



            
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center h-screen md:h-auto md:flex ">
                <li className="flex justify-center  py-2  text-xl text-center text-white border-b-2 border-ThemeColor md:px-6 md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                  {/* <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link> */}
                  <a href="/Resume.pdf" onClick={() => setNavbar(!navbar)} download>Resume</a>
                </li>
                <li className="px-6 py-2  text-xl text-center text-white border-b-2 border-ThemeColor md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                  {/* <Link href="#skills" onClick={() => setNavbar(!navbar)}>
                    Skills
                  </Link> */}
                  <a href="#skills" onClick={() => setNavbar(!navbar)}>Skills</a>
                </li>
                <li className="px-6 py-2  text-xl text-center text-white border-b-2 border-ThemeColor md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                  {/* <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link> */}
                  <a href="#projects" onClick={() => setNavbar(!navbar)}>Projects</a>
                </li>
                <li className="px-6 py-2  text-xl text-center text-white border-b-2 border-ThemeColor md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                  {/* <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link> */}
                  <a href="#contact" onClick={() => setNavbar(!navbar)}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;