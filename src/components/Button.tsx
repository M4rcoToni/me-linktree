import { SVGS } from '../svgs/svgs';
import { motion, transform, useAnimation } from "framer-motion";

interface ButtonProps {
  title: string;
  svgtipe: 'github' | 'linkdin' | 'insta' | 'portifolio';
}

export function Button({ svgtipe, title }: ButtonProps) {
  return (

    <div className='mt-20'>
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        whileTap={{ scale: 0.9 }}
        className='w-[600px] p-2 bg-transparent border-2 border-white fill-white hover:fill-purple-900 text-white flex flex-row content-center justify-center'
        href='22'
      >
        <div className=''>
          <SVGS name={svgtipe} />
        </div>
        <div>
          <span className='text-xl font-semibold block p-4 self-center'>
            {title}
          </span>
        </div>
      </motion.a >
    </div >
  )
}