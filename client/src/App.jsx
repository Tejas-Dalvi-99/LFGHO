import "./App.css";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

function App() {
  const { address } = useAccount();
  return (
    <div className="App">
      <div className="nav">
        <div className="connect-wallet-btn">
          <ConnectKitButton />
        </div>
      </div>
      <div className="body">
        <p>Connected Wallet: {address ? address : "Not Connected"}</p>
      </div>
    </div>
  );
}

export default App;
