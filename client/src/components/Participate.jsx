/* eslint-disable react/prop-types */
import "./Participate.css";
import { useState } from "react";
import { useContractWrite } from 'wagmi'
import { motion } from "framer-motion";
import axios from "axios";
import GHO from '../abi/GHO.json'
import loading from '../assets/loading.gif'

function Participate({ address }) {
  const userAddress = address;
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loader, setLoader] = useState(false);

  const { write } = useContractWrite({
    address: '0x2DC0456FffEEdc5da87683382C8366f13ec61499',
    abi: GHO.abi,
    functionName: 'addEntry',
    account: userAddress,
    // args: [name, description, ImgHash],
    // value: parseEther('1'),
    onError(error) {
      console.log('Error', error)
    },
    // onSuccess(data){
    //   console.log(data)
    // }
  })

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoader(true)
      const formData = new FormData();
      formData.append("file", image);

      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: `5d285b31aa2d12a310d0`,
          pinata_secret_api_key: `86a7c6b5e001f12d525f7fe64d45cae019a764fcbc1af3af30a227e61845183b`,
          "Content-Type": "multipart/form-data",
        },
      });

      const hash = await `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`

      const result = await write({
        args: [name, description, hash],
      });

      setLoader(false)
      console.log(name+" "+description+" "+hash+" "+result)

      // setName("");
      // setImage("");
      // setDescription("");
    } 
    catch (e) {
      console.log(e);
    }
  }

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    // console.log(data)
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setImage(e.target.files[0]);
    };
    e.preventDefault();
  };

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
            maxLength={30}
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
            maxLength={400}
            placeholder="Description (Max 400 Characters)"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="message-box field"
          ></textarea>

          <div className="img-input">
            <input required name="data" type="file" onChange={retrieveFile} />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </motion.div>
      { loader &&
      <div className="loading">
        <img src={loading} alt="" />
      </div>
      }
    </>
  );
}

export default Participate;
