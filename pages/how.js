import Head from "next/head";
import styles from "../styles/How.module.css";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className="all">
      <Head>
        <title>Lotto Time!</title>
        <meta name="viewport" content="width=95vw, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <div className={styles.text}>
        This game works based on the rules of our smart contract, which can be
        viewed on{" "}
        <a href="https://goerli.etherscan.io/address/0x9fDfbf3C5F12dE43Ef118b9769516e82c1FA5E2d#internaltx">
          etherscan
        </a>{" "}
        and{" "}
        <a href="https://github.com/sdavidkong/SmartContractLottery/blob/master/contracts/Raffle.sol">
          github!
        </a>
        <br></br>
        <br></br>
        Entering the lotto costs 0.01 Goerli ETH. After at least 1 player has
        entered, a winner is randomly selected using Chainlink VRF after 1
        minute. Because this game uses{" "}
        <a href="https://docs.chain.link/docs/vrf/v2/introduction/">
          Chainlink VRF{" "}
        </a>
        and{" "}
        <a href="https://docs.chain.link/docs/chainlink-automation/introduction/">
          automation
        </a>
        , you can rest assured that the results are truly fair and no one can
        ever cheat!
        <br></br>
        <br></br>
        You can obtain some Goerli testnet ETH{" "}
        <a href="https://goerlifaucet.com/"> here</a>.<br></br>
        <br></br>
      </div>
      <div className={styles.ethlogodiv}>
        <img
          className={styles.ethlogo}
          src="/Eth-rainbow.png"
          alt="A colorful tilted eth logo!"
        />
      </div>
    </div>
  );
}
