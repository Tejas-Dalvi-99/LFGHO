import "./App.css";

import { useAccount } from "wagmi";
import Cursor from "./components/Cursor";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Featured from "./components/Featured";
import Judges from "./components/Judges";
import Navbar from "./components/Navbar";

function App() {
  const { address } = useAccount();
 
  return (
    <>
    <Navbar/>
    <div className="App">
        <Routes>
            <Route path="/" element={<Home address={address}/>} />
            <Route path="/featured" element={<Featured address={address}/>} />
            <Route path="/judges" element={<Judges address={address}/>} />
        </Routes>
    </div>
    <Cursor />
    </>
  );
}

export default App;
