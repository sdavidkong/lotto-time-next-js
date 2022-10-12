import { ConnectButton } from "web3uikit";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.connectButtonDiv}>
        <ConnectButton className={styles.button} moralisAuth={false} />
      </div>

      <img
        className={styles.png}
        src="/lottotime.png"
        alt="A colorful banner that reads Lotto Time!"
      />
    </div>
  );
};

export default Header;
