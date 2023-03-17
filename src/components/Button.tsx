import { SVGS } from '../svgs/svgs';
import { motion, transform, useAnimation } from "framer-motion";
interface ButtonProps {
  type: "mobile" | "web";
  title: string;
  svgtipe: 'github' | 'linkdin' | 'insta' | 'portifolio';
  link: string;
}
export function Button({ svgtipe, title, link, type }: ButtonProps) {
  switch (type) {
    case "mobile":
      return (
        <div className='mt-14 '>
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
            className='w-80 bg-transparent border-2 border-white hover:border-purple-900  fill-white hover:fill-purple-900 hover:text-purple-900  text-white flex flex-row content-center justify-center'
            target="_blank"
            href={link}
          >
            <div className='flex items-center justify-center '>
              <SVGS
                size={30}
                name={svgtipe}
              />
            </div>
            <div>
              <span className='text-base font-normal block p-4 self-center'>
                {title}
              </span>
            </div>
          </motion.a >
        </div >
      )
    case "web":
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
            <div className='p-2 flex items-center justify-center '>
              <SVGS size={50} name={svgtipe} />
            </div>
            <div>
              <span className='text-xl font-normal block p-4 flex self-center'>
                {title}
              </span>
            </div>
          </motion.a >
        </div >
      )
  }
}
