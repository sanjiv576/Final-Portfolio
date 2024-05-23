import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { coverImg } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>


      {/* Foreground Image */}
      <img src={`${coverImg}`} className='absolute top-0 right-0 w-1/2 h-full object-contain z-10' alt="foreground image" />

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          {/* Vertical Gradient */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915eff]'>Sanjiv</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a full stack developer at both mobile and web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* Make motion movable */}
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
