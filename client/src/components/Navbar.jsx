import './Navbar.css'
import { ConnectKitButton } from "connectkit";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

function Navbar() {
  const navigateTo = useNavigate();
  return (
    <div className="nav">
        <div className="connect-wallet-btn">
          <ConnectKitButton />
        </div>
        <div className="page-links">
          <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
          className="link" onClick={()=>navigateTo('/')}>Home</motion.p>

          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 , times: [0.1]}} 
          className="link" onClick={()=>navigateTo('/featured')}>Featured</motion.p>

          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 , times: [0.2]}} 
          className="link" onClick={()=>navigateTo('/participate')}>Participate</motion.p>

          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.5 , times: [0.3]}} 
          className="link" onClick={()=>navigateTo('/judges')}>Judges</motion.p>
        </div>
      </div>
  )
}

export default Navbar