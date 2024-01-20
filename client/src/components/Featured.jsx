/* eslint-disable react/prop-types */
import "./Featured.css";
import { useContractRead } from "wagmi";
import GHO from "../abi/GHO.json";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Featured() {

  const [entries, setEntries] = useState([]);
  const { data } = useContractRead({
    address: "0x2DC0456FffEEdc5da87683382C8366f13ec61499",
    abi: GHO.abi,
    functionName: "getAllEntries",
  });

  useEffect(() => {
    async function fetchdata(){
    try {
      const response = await data
      setEntries(response);
      console.log(entries);
    } catch (e) {
      console.log("Error :",e);
    }
  }
  fetchdata();
  }, [data, entries]);

  return (
    <>
      <div className="featured">
        {entries
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
