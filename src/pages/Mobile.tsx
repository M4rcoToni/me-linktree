import '../styles/global.css';
import { useEffect, useState } from "react";
import { motion, transform, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { getMyDataFromGit, UserInfos } from '../api/github';
import { Avatar } from '../components/Avatar';
import { Button } from '../components/Button';
function Mobile() {
  const [userData, setUserData] = useState<UserInfos | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getMyDataFromGit("m4rcotoni");
      setUserData(data);
    }
    fetchData();
  }, []);

  return (

    <motion.div
      className='w-screen pt-6 flex flex-col items-center justify-center bg-black'
    >
      {
        userData &&
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{
            x: 0,
            y: 20,
            rotate: 0,
            scale: 1,
          }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className='pb-8'>
            <Avatar
              avatar_url={userData?.avatar_url}
              name={userData?.name}
              username={`@${userData?.login}`}
            />
          </div>
          <div className=' px-6 w-full '>

            <Button
              type='mobile'
              link='https://github.com/M4rcoToni'
              svgtipe='github' title='Codando aqui'
            />
            {/* <Button  svgtipe='portifolio' title='Veja minha História no Portifolio' /> */}
            <Button
              type='mobile'
              link='https://www.linkedin.com/in/m4rcotoni/'
              svgtipe='linkdin' title='Me contrate no Linkdin'
            />
            <Button
              type='mobile'
              link='https://www.instagram.com/m4rcotoni/'
              svgtipe='insta' title='Segue no Insta!'
            />
          </div>

        </motion.div>
      }

    </motion.div >
  )
}

export default Mobile
