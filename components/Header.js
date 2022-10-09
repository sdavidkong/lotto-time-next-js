import { ConnectButton } from "web3uikit";
import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <div className={styles.connectButtonDiv}>
          <ConnectButton className={styles.button} moralisAuth={false} />
        </div>

        <img
          className={styles.lottoTimeBanner}
          src="/lottotime.png"
          alt="A colorful banner that reads Lotto Time!"
        />
      </div>
    </div>
  );
};

export default Header;
