/* eslint-disable react/prop-types */

function Judges({address}) {
  return (
    <div>{address ? "Judges" : "Please Connect Your Wallet"}</div>
  )
}

export default Judges