import './styles/global.css';
import { Avatar } from './components/Avatar';
import { useEffect, useState } from "react";
import { getMyDataFromGit, UserInfos } from './api/github';
import { Button } from './components/Button';
import { motion } from "framer-motion"
function App() {

  const [userData, setUserData] = useState<UserInfos | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getMyDataFromGit("m4rcotoni");
      setUserData(data);
    }
    fetchData();
  }, []);
  const width = 500;
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{
          x: 0,
          y: 50,
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
        <div className='max-w-[500px] px-20 '>

          <Button svgtipe='github' />
          <Button svgtipe='insta' />
          <Button svgtipe='linkdin' />
        </div>
      </motion.div>
    </div>
  )
}

export default App
