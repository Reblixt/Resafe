import "./App.scss";
import { ethers } from "ethers";
import { settings } from "./service/config";
import { useState } from "react";
import { WalletInfo } from "./components/WalletInfo";
import { WalletData } from "./service/Interfaces";
import { LoggedinApp } from "./components/loggedin/LoggedinApp";
import { LogginDetail } from "./components/LogginDetail";
import { NavBase } from "./components/navbar/NavBase";

const provider = new ethers.JsonRpcProvider(settings.ANVIL_URL);
//console.log(provider);
//console.log(ethers.Wallet);

function App() {
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [walletCreated, setWalletCreated] = useState<boolean>(false);
  const [storedSeedPhrase, setSeedPhrase] = useState<string>("");

  function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    const mnemonic = wallet && wallet.mnemonic ? wallet.mnemonic.phrase : null;
    const privateKey = wallet.privateKey;
    console.log(`Generated seed phrase: ${mnemonic}`);
    console.log(`Generated address: ${wallet.address}`);
    console.log(`Generated private key: ${privateKey}`);
    wallet !== null && mnemonic !== null
      ? setWalletData({ wallet, mnemonic })
      : setWalletData(null);
    setWalletCreated(true);
    setLoggedIn(true);
  }

  function loginWallet(password: string = "") {
    const seedPhrase = password;
    if (seedPhrase === "") {
      console.error("Seed phrase is empty");
      return;
    }
    const wallet = ethers.Wallet.fromPhrase(seedPhrase);
    console.log(wallet.privateKey);
    //setSeedPhrase(seedPhrase);
    setLoggedIn(true);
    setWalletData({ wallet, mnemonic: seedPhrase });
    setWalletCreated(true);
  }

  return (
    <>
      <NavBase chain="Anvil" />

      {!loggedIn ? (
        <LogginDetail loginFunction={loginWallet} />
      ) : (
        <LoggedinApp />
      )}
      {!walletCreated ? (
        <div className="create-button-contianer">
          {" "}
          <button onClick={createWallet}>Create Wallet</button>
        </div>
      ) : null}
      {walletCreated ? <WalletInfo walletData={walletData} /> : null}
    </>
  );
}

export default App;
