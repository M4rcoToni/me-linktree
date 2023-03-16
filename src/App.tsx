import './styles/global.css';
import { Avatar } from './components/Avatar';
import { useEffect, useState } from "react";
import { getMyDataFromGit, UserInfos } from './api/github';
import { Button } from './components/Button';
import { motion, transform, useAnimation, useMotionValue, useTransform } from "framer-motion";
function App() {
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
      className='w-screen background h-[100vh] flex flex-col items-center justify-center bg-black'
    >
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
        <Avatar
          avatar_url={userData?.avatar_url}
          name={userData?.name}
          username={`@${userData?.login}`}
        />
        <div className=' px-3 w-full '>

          <Button svgtipe='github' title='Codando aqui' />
          <Button svgtipe='portifolio' title='Veja minha História no Portifolio' />
          <Button svgtipe='linkdin' title='Me contrate no Linkdin' />
          <Button svgtipe='insta' title='Sigue no Insta!' />
        </div>
      </motion.div>

    </motion.div >
  )
}

export default App
