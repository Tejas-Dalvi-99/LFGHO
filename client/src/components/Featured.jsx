/* eslint-disable react/prop-types */

function Featured({address}) {
  return (
    <div>{address ? "Featured" : "Please Connect Your Wallet"}</div>
  )
}

export default Featured