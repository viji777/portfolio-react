import { HERO } from "../constants";
import vijiImg from '../assets/viji.png'
import { motion } from "framer-motion";
import resume from '../assets/Vijayalekshmi.pdf'


const Hero = () => {
  return (
    <section id="HERO"
      className="flex min-h-screen flex-wrap items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 "
      >
        <h2 className="my-8 p-2 text-3xl font-bold md:text-4xl lg:text-[6rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter  lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
        
        
        <a href={resume}  target="_blank" rel="noopener noreferrer">
        <button className="items-center m-auto ml-5 mb-10 p-3 bg-slate-300 text-black text-lg md:text-xl lg:text-xl font-bold m rounded-3xl">Check Resume</button>
      </a>

        
      

        
        
      </motion.div>
      <motion.div 
       initial={{ opacity: 0, scale:0.8 }}
       animate={{ opacity: 1, scale:1 }}
       transition={{ duration: 1 }}
      
      className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center ">
          <motion.img
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1}}
            src={vijiImg}
            width={550}
            height={550}
            alt="Carl Frank"
            className="rounded-3xl"
          ></motion.img>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
