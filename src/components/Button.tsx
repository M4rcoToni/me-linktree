import { SVGS } from '../svgs/svgs';
import { motion, transform, useAnimation } from "framer-motion";
import { } from 'react'
interface ButtonProps {
  title: string;
  svgtipe: 'github' | 'linkdin' | 'insta' | 'portifolio';
  link: string;
}
export function Button({ svgtipe, title, link }: ButtonProps) {
  function checkDevice() {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true; // está utilizando celular
    }
    else {
      return false; // não é celular
    }
  }

  console.log(checkDevice()); // false - estou no PC


  return (

    <div className='mt-14 '>
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        whileTap={{ scale: 0.9 }}
        className='w-full px-20 bg-transparent border-2 border-white hover:border-purple-900  fill-white hover:fill-purple-900 hover:text-purple-900  text-white flex flex-row content-center justify-center'
        target="_blank"
        href={link}
      >
        <div className='p-2'>
          <SVGS name={svgtipe} />
        </div>
        <div>
          <span className='text-xl font-normal block p-4 self-center'>
            {title}
          </span>
        </div>
      </motion.a >
    </div >
  )
}