"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import "../styles/globals.css";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleLinkClick = () => {
    setNavbar(false); // Close navbar on link click
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-10 w-full bg-black">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <Image src={"./CarLogo.svg"} width={50} height={50} alt="brand" />
            </Link>

            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="Close menu" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="Open menu"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>

          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
            <ul className="items-center justify-center h-screen md:h-auto md:flex">
              <li className="flex justify-center py-2 text-xl text-center text-white border-b-2 border-ThemeColor md:px-6 md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                <a href="/Carlos Lopez Resume.pdf" onClick={handleLinkClick} download className="w-full h-full block text-center">Resume</a>
              </li>
              <li className="px-6 py-2 text-xl text-center text-white border-b-2 border-ThemeColor md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                <Link href="#skills" onClick={handleLinkClick} className="w-full h-full block text-center">Skills</Link>
              </li>
              <li className="px-6 py-2 text-xl text-center text-white border-b-2 border-ThemeColor md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                <Link href="#projects" onClick={handleLinkClick} className="w-full h-full block text-center">Projects</Link>
              </li>
              <li className="px-6 py-2 text-xl text-center text-white border-b-2 border-ThemeColor md:border-b-0 hover:bg-ThemeColor md:hover:text-ThemeColor md:hover:bg-transparent">
                <Link href="#contact" onClick={handleLinkClick} className="w-full h-full block text-center">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
