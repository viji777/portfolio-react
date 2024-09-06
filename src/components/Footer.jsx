
import {SOCIAL_MEDIA_LINKS} from '../constants'
import {motion} from "framer-motion";


const Footer = () => {
  return (
    <div className='mb-8 mt-20 '>

        <div className='flex items-center justify-center gap-8 '>
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <motion.a 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5,delay:index*0.5}}
                key={index} href={link.href} target='_blank' rel='noopenner noreferrer'>{link.icon}</motion.a>
            ))}
        </div>
        
    </div>
  )
}

export default Footer