import './styles/global.css';
import { useEffect, useState } from "react";
import Mobile from './pages/Mobile';
import Web from './pages/Web';
function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      userAgent.includes('mobile') || userAgent.includes('tablet');

    setIsMobile(isMobileDevice);
  }, []);
  console.log(isMobile);

  return (
    <div className='bg-black'>
      {
        isMobile ?
          <Mobile />
          :
          <Web />
      }
    </div >
  )
}

export default App
