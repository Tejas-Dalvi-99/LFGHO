import "./App.css";
// import { useEffect } from "react";
import { useAccount } from "wagmi";
import Cursor from "./components/Cursor";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Judges from "./components/Judges";
import Navbar from "./components/Navbar";
import Participate from "./components/Participate";
// import Example from './abi/Example.json' ; 
// import { useContractRead } from "wagmi";
// import { useContractWrite } from 'wagmi'
// import { useEffect } from "react";
// import { parseEther } from "viem";

function App() {

  const { address } = useAccount();

  // const { data: word } = useContractRead({
  //   address: '0xBEF08C7941066b7598fa1478dE70701182053f5f',
  //   abi: Example.abi,
  //   functionName: 'helo',
  // });

  return (
    <>
    <Navbar/>
    <div className="App">
        <Routes>
            <Route path="/" element={<Home address={address} />} />
            <Route path="/featured" element={<Featured address={address} />} />
            <Route path="/judges" element={<Judges address={address}/>} />
            <Route path="/participate" element={<Participate address={address}/>} />
        </Routes>
    </div>
    <Cursor />
    
    </>
  );
}

export default App;
