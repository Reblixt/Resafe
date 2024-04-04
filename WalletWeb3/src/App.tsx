import "./App.css";
import { Web3 } from "web3";

const web3 = new Web3("http://localhost:8545");

web3.eth.getAccounts().then(console.log);

function App() {
  return (
    <>
      <div>
        <h1> This is test of a typescript</h1>
      </div>
    </>
  );
}

export default App;
