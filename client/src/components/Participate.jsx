/* eslint-disable react/prop-types */
import "./Participate.css";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Participate({ address }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", image);

    const resFile = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: `840f25a841a032f15eb3`,
        pinata_secret_api_key: `feca959005f2d80a1aedc6d731d80fe05d18a011576f47d2cbe660e62b47430d`,
        "Content-Type": "multipart/form-data",
      },
    });
    const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

    setName("");
    setImage("");
    setDescription("");
    alert(name + " " + description + " " + image);
  }

//   const retrieveFile=(e)=>{
//     e.preventDefault(); 
//     const data = e.target.files[0]; 
//     const reader = new window.FileReader(); 
//     reader.readAsArrayBuffer(data); 
//     reader.onloadend=()=>{
//         setImage(e.target.files[0]); 
//     }
//     }; 

  return !address ? (
    "Please Connect Your Wallet"
  ) : (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="contact"
      >
        <h1>Participate</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="field"
          />

          <textarea
            required
            maxLength={800}
            placeholder="Description (Max 800 Characters)"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="message-box field"
          ></textarea>

          <div className="img-input">
            <input
              required
              value={image}
              type="file"
              onChange={(e)=>{setImage(e.target.value)}}
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
}

export default Participate;
