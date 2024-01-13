import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { WagmiConfig, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { ConnectKitProvider, getDefaultConfig } from 'connectkit';

const config = createConfig(
  getDefaultConfig({
    appName: 'ConnectKit Vite demo',
    //infuraId: import.meta.env.VITE_INFURA_ID,
    //alchemyId:  import.meta.env.VITE_ALCHEMY_ID,
    chains: [sepolia],
    walletConnectProjectId: import.meta.env.WALLETCONNECT_PROJECT_ID,
  })
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <ConnectKitProvider debugMode>
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);