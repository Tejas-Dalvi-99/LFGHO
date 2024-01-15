import "./App.css";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import Cursor from "./components/Cursor";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Judges from "./components/Judges";

function App() {
  const { address } = useAccount();
  const navigateTo = useNavigate();
  return (
    <div className="App">
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
      <div className="body">
        {/* <p>Connected Wallet: {address ? address : "Not Connected"}</p> */}
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/featured" element={<Featured/>} />
            <Route path="/judges" element={<Judges />} />
        </Routes>
      </div>
      <Cursor />
    </div>
  );
}

export default App;
