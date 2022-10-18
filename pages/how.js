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
        You can enter by purchasing 1 entry for 0.01 ETH. After enough players
        have entered OR 1 week has passed, a winner is randomly selected.
        Because this game uses Chainlink VRF and automation, you can rest
        assured that the results are truly fair and no one can ever cheat!
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
