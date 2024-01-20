/* eslint-disable react/prop-types */
import "./Judges.css";
import { useContractRead, useContractWrite } from "wagmi";
import GHO from "../abi/GHO.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Judges({ address }) {
  const [entries, setEntries] = useState([]);
  const { data } = useContractRead({
    address: "0x2DC0456FffEEdc5da87683382C8366f13ec61499",
    abi: GHO.abi,
    functionName: "getAllEntries",
  });

  const { write } = useContractWrite({
    address: '0x2DC0456FffEEdc5da87683382C8366f13ec61499',
    abi: GHO.abi,
    functionName: 'transferToken',
    account: address,
  })

  useEffect(() => {
    try {
      setEntries(data);
    } catch (e) {
      console.log("Error :", e);
    }
  }, [data, entries, address]);

  return !address ? (
    "Please Connect Your Wallet"
  ) : !(address == "0x7Df34FEEe75BAA147D2cAa19Df652f20DaE9addf") ? (
    "You are not Authorised"
  ) : (
    <>
      <div className="featured">
        {entries
          ? entries.map((entry) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="judges-entry-card"
                  key={entry.productName}
                >
                  <div>
                    <div className="entry-img">
                      <img src={entry.imgURL}></img>
                    </div>
                    <h1>{entry.productName}</h1>
                    {/* <p>{entry.walletAddress}</p> */}
                    <p>{entry.description}</p>
                  </div>
                  <div className="reward-btn">
                  <button onClick={()=>{
                    const result = write({
                      args: [entry.walletAddress],
                    });
                    console.log(result)
                  }}>Reward</button>
                </div>
                </motion.div>
              );
            })
          : "No Entries till now"}
      </div>
    </>
  );
}

export default Judges;
