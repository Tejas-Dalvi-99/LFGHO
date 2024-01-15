import './Navbar.css'
import { ConnectKitButton } from "connectkit";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigateTo = useNavigate();
  return (
    <div className="nav">
        <div className="connect-wallet-btn">
          <ConnectKitButton />
        </div>
        <div className="page-links">
          <p className="link" onClick={()=>navigateTo('/')}>Home</p>
          <p className="link" onClick={()=>navigateTo('/featured')}>Featured</p>
          <p className="link" onClick={()=>navigateTo('/judges')}>Judges</p>
        </div>
      </div>
  )
}

export default Navbar