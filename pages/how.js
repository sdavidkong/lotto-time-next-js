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
        This game works based on the rules of our verified smart contract, which
        can be viewed on etherscan!
        <br></br>
        <br></br>
        You can enter by purchasing 1 entry for 0.01 ETH. After at least 1
        player has entered, a winner is randomly selected after 1 minute.
        Because this game uses{" "}
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
        If you do not want to use real ETH to play, you can also play on the
        Goerli testnet! You can obtain some Goerli test ETH here.
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
