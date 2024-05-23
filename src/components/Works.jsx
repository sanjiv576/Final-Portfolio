import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary mb-4 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fill rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover space-x-2'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAwklEQVR4AWNwL/ChKx6GFo5a+J+BQRmIfYE4HYgrgLgLiOdA8VqsGCHfBdWTDjVDGaeFQElmIL4CxP+pjK/gsnA7SAGN8FpsFv6nJUaxECggSmsLQXYgW2hOlKbs7P//7ezItVAf2UJfojTNnv0fDNauJcdCX2QLo0iwEAHa2si2MJ1ECxHg1StIUBPWH0V3C+kepOQnmi1byE809M8W9M/49C/a6F940796wqyAo/BUvtuRMZ5KOApk1mibhmI8aiEAWJrZd6IgmiUAAAAASUVORK5CYII='
                alt='demo'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>


        </div>


        <div className='mt-5'>
          <h4 className='text-white font-bold'>{name}</h4>
          <p className='mt-2 text-secondary text-[14px] text-justify'>{description.substring(0,150)}...</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-auto flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[16px] leading-[30px] text-justify w-full'
        >
         "These projects demonstrate my skills and experience through practical examples of my work. 
         Each project includes a brief description along with links to code repositories and live demos. 
         They showcase my ability to tackle complex challenges, work with various technologies, and manage projects efficiently."
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
