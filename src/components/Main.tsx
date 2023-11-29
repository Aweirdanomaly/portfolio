import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Type from "../components/Type";

export default function Main() {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<h1 className="py-4 text-white-700">
						Howdy, I'm <span className="text-ThemeColor"> Carlos</span> A
					</h1>

					<h1 className="py-2 text-white-700">{<Type />}</h1>

					<p className="py-4 text-white-600 sm:max-w-[70%] m-auto tracking-widest uppercase">
						Let's build something together
					</p>

					<div className="flex max-sm:gap-0.5 items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/carlos-lopez-98aa4b1a9/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-3 sm:p-4 bg-[#413F3F] duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-125">
								<FaLinkedinIn size={30} />
							</div>
						</a>
						<a
							href="https://github.com/Aweirdanomaly"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-3 sm:p-4 bg-[#413F3F] duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-125">
								<FaGithub size={30}/>
							</div>
						</a>
						<a href="/#contact">
							<div className="p-3 sm:p-4 bg-[#413F3F] duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-125">
								<AiOutlineMail size={30} />
							</div>
						</a>
						<a href="/Resume.pdf" download>
							<div className="p-3 sm:p-4 bg-[#413F3F] duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-ThemeColor hover:scale-125">
								<BsFillPersonLinesFill size={30} />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
