import "./App.css";
import { ethers } from "ethers";
import { settings } from "./service/config";
import { useState } from "react";

const provider = new ethers.JsonRpcProvider(settings.ANVIL_URL);
//console.log(provider);
//console.log(ethers.Wallet);

let isWalletCreated = false;

function App() {
  const [walletData, setWalletData] = useState(null);

  function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet.mnemonic.phrase;
    const privateKey = wallet.privateKey;
    console.log(`Generated seed phrase: ${mnemonic}`);
    console.log(`Generated address: ${wallet.address}`);
    console.log(`Generated private key: ${privateKey}`);
    isWalletCreated = true;
    setWalletData({ wallet, mnemonic });
  }

  return (
    <>
      <h1>Resafe-wallet</h1>
      <button onClick={createWallet}>Create Wallet</button>
      <div>
        <p>Seed Phrase: {isWalletCreated ? walletData.mnemonic : ""}</p>
        <p>Address: {isWalletCreated ? walletData.wallet.address : ""}</p>
        <p>
          Private key: {isWalletCreated ? walletData.wallet.privateKey : ""}
        </p>
      </div>
    </>
  );
}

export default App;
