/* eslint-disable react/prop-types */
// import { useContractWrite } from 'wagmi'
// import Example from '../abi/Example.json' ; 
// import { parseEther } from 'viem';
// import { useToken } from 'wagmi'
import { useEffect } from 'react';
// import { useBalance } from 'wagmi';


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
    <div>
    <div>Home</div> 
    {/* <div>{balance?.formatted}{balance?.symbol}</div> */}
    {/* <button onClick={()=>{write()}} disabled={!address}>{address ? "Click" : "disabled"}</button> */}
    </div>
  )
}

export default Home