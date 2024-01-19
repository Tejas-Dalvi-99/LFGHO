/* eslint-disable react/prop-types */ 
// import { parseEther } from 'viem';
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import './Home.css'
// import vase2 from '../assets/vase 2 nobg.png'
// import multiple from '../assets/multipleflowers.png'
// import plant from '../assets/plant.png'
// import hotpot from '../assets/hotpot.png'
import plants2 from '../assets/plants2.png'


function Home({address}) {

  const userAddress = address;

  useEffect(()=>{
    // console.log(userAddress)
  },[userAddress]) 

  return (
    <div className='home'>
    <div className='home-left'>
      <div className='home-heading'>
        <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 , times: [0.3]}} 
        >Let&apos;s Gho Eco</motion.h1>

        <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 , times: [0.6]}} 
        >Where Green Meets</motion.h2>

        <motion.h3
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 , times: [0.9]}}  
        >Blockchain</motion.h3>

        <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeInOut", duration: 1.5 , times: [0.9]}} 
        >GHO-ECO offers a visionary platform where organizations showcase their environmentally conscious initiatives, Join us as we redefine the landscape of eco-conscious solutions.</motion.p>
      </div>
    </div> 

    <div className='home-right'>
      <motion.div className='flowers'
      initial={{ opacity: 0 , x: 100 }}
      animate={{ opacity: 1 , x: 0 }}
      transition={{ ease: "easeInOut", duration: 2 , times: [0.3]}} 
      >
        <img src={plants2}></img>
      </motion.div>
    </div> 
    </div>
  )
}

export default Home