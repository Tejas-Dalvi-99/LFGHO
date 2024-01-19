/* eslint-disable react/prop-types */
import "./Featured.css";
import { useContractRead } from "wagmi";
import GHO from "../abi/GHO.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Featured({ address }) {

  const [entries, setEntries] = useState([]);
  const { data } = useContractRead({
    address: "0x30CF065077BEBf412bD64490c2E50A21B4BaB621",
    abi: GHO.abi,
    functionName: "getAllEntries",
  });

  useEffect(() => {
    try {
      setEntries(data);
      console.log(entries);
    } catch (e) {
      console.log("Error :");
    }
  }, [data, entries]);

  return (
    <>
      <div className="featured">
        {entries.length
          ? entries.map((entry) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="entry-card"
                  key={entry.imgURL}
                >
                  <div>
                    <div className="entry-img">
                      <img src={entry.imgURL}></img>
                    </div>
                    <h1>{entry.productName}</h1>
                    <p>{entry.description}</p>
                  </div>
                  {/* <div className="reward-btn">
                  <button>Reward</button>
                </div> */}
                </motion.div>
              );
            })
          : "No Entries till now"}
      </div>
    </>
  );
}

export default Featured;
