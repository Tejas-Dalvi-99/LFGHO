/* eslint-disable react/prop-types */
// import { useContractWrite } from 'wagmi'
// import Example from '../abi/Example.json' ; 
// import { parseEther } from 'viem';
// import { useToken } from 'wagmi'
import { useEffect } from 'react';
import { motion } from 'framer-motion'
// import { useBalance } from 'wagmi';
import './Home.css'
import vase2 from '../assets/vase 2 nobg.png'


function Home({address}) {

  const userAddress = address;
  useEffect(()=>{
    console.log(userAddress)
  },[userAddress]) 

  // const { write } = useContractWrite({
  //   address: '0xBEF08C7941066b7598fa1478dE70701182053f5f',
  //   abi: Example.abi,
  //   functionName: 'update',
  //   account: userAddress,
  //   args: ["Tompr na bhai"],
  //   // value: parseEther('1'),
  //   onError(error) {
  //     console.log('Error', error)
  //   },
  // })

  // const { data: GHOInfo } = useToken({
  //   address: '0xc4bF5CbDaBE595361438F8c6a187bDc330539c60',
  // })

  // const { data: balance } = useBalance({
  //   address: userAddress,
  // })
  
  // useEffect(()=>{
  //   console.log(GHOInfo)
  // },[GHOInfo])

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
        <img src={vase2}></img>
      </motion.div>
    </div> 
    </div>
  )
}

export default Home