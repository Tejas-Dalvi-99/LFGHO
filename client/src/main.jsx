import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { WagmiConfig, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    appName: 'client',
    alchemyId:  import.meta.env.ALCHEMY_API_KEY,
    chains: [sepolia],
    walletConnectProjectId: import.meta.env.WALLETCONNECT_PROJECT_ID,
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <Router>
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </Router>
);