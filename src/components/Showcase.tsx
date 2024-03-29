import React from "react";
import testImg from "../../public/kirbo.jpg";

import ProjectItem from "./Project";

const Projects = () => {
	return (
		<div id="projects" className="relative w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<h2 className="flex max-sm:justify-center max-sm:items-center uppercase text-ThemeColor tracking-[10px] relative lg:tracking-[20px] text-2xl">
					Projects
				</h2>
				<h2 className="flex max-sm:justify-center max-sm:items-center py-5 uppercase tracking-[3px] text-gray-500 text-sm">
					A few Things I've Built
				</h2>
				<div className="grid gap-8 md:grid-cols-3">
					<ProjectItem
						title="SQL Table Editor"
						backgroundImg={"/videos/sqluse.webm"}
						projectUrl="https://github.com/Aweirdanomaly/sql-table-editor"
						tech="Python Tkinter Qt5 SQL"
					/>

					<ProjectItem
						title="Pico-8 Carts"
						backgroundImg={"/videos/dancing.webm"}
						projectUrl="https://github.com/Aweirdanomaly/Pico-8-carts"
						tech="Lua Pico8"
					/>
					<ProjectItem
						title="Nutri-Snap"
						backgroundImg={"/videos/nutriSnap.webm"}
						projectUrl="https://devpost.com/software/nutrisnap-the-nutritional-helper"
						tech="ReactNative Expo Tensorflow Flask"
					/>

					<ProjectItem
						title="ezML FrontEnd"
						backgroundImg={"/videos/ezml.webm"}
						projectUrl="https://ezml.io"
						tech="NextJS Tailwind"
					/>
					{/* <ProjectItem
            title='ML Handwritten Digit Recognizer'
            backgroundImg={testImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
					{/* <ProjectItem
            title='Crypto Website'
            backgroundImg={testImg}
            projectUrl='/crypto'
            tech='React JS'

          /> */}
				</div>
			</div>
		</div>
	);
};

export default Projects;
