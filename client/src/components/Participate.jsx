/* eslint-disable react/prop-types */
import "./Participate.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Participate({ address }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setImage("");
    setDescription("");
    alert(name + " " + description + " " + image);
  }

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
            className="noCircle field"
          />

          <textarea
            required
            maxLength={800}
            placeholder="Description (Max 800 Characters)"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="message-box noCircle field"
          ></textarea>

          <div className="img-input">
            <input
              required
              value={image}
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImage(e.target.value);
              }}
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
