import Head from "next/head";
import styles from "../styles/How.module.css";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";
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
      <LotteryEntrance />
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
