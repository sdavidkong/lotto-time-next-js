import { ConnectButton } from "web3uikit";
import React from "react";

const Header = () => {
  return (
    <div className="border-b-2 p-5 flex flex-row">
      <div>
        <img
          className="lottoTimeBanner"
          src="/lottotime.png"
          alt="A colorful banner that reads Lotto Time!"
        />
      </div>

      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
