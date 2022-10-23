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
        <a
          className={styles.link}
          href="https://goerli.etherscan.io/address/0x9fDfbf3C5F12dE43Ef118b9769516e82c1FA5E2d#internaltx"
          target="_blank"
          rel="noopener noreferrer"
        >
          etherscan
        </a>{" "}
        and{" "}
        <a
          className={styles.link}
          target="_blank"
          href="https://github.com/sdavidkong/SmartContractLottery/blob/master/contracts/Raffle.sol"
          rel="noopener noreferrer"
        >
          github!
        </a>
        <br></br>
        <br></br>
        Entering the lotto costs 0.01 Goerli ETH. After at least 1 player has
        entered, a winner is randomly selected using Chainlink VRF after 1
        minute. Because this game uses{" "}
        <a
          className={styles.link}
          href="https://docs.chain.link/docs/vrf/v2/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chainlink VRF{" "}
        </a>
        and{" "}
        <a
          className={styles.link}
          href="https://docs.chain.link/docs/chainlink-automation/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          automation
        </a>
        , you can rest assured that the results are truly fair and no one can
        ever cheat!
        <br></br>
        <br></br>
        You can obtain some Goerli testnet ETH{" "}
        <a
          className={styles.link}
          href="https://goerlifaucet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          here
        </a>
        .<br></br>
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
