import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-full md:w-[250px] mb-6'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img className='w-25 h-25 object-contain ' src={icon} alt={title} />
          <h3 className='text-white text-[16px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h3 className={`${styles.sectionHeadText}`}>Overview</h3>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='text-[16px] leading-[25px] text-secondary mb-2 mt-2 w-full'>
        I am a driven and hardworking developer specializing in creating mobile apps using Flutter and web solutions with the MERN stack. I possess a knack for solving problems effectively and have a strong desire to keep learning. My self-motivation ensures excellent self-management, and my teamwork skills bring coordination and harmony to collaborative projects.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
