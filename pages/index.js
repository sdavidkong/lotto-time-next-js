import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
  return (
    <div className="all">
      <Head>
        <title>Lotto Time!</title>
        <meta name="viewport" content="width=95vw, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LotteryEntrance />
    </div>
  );
}
