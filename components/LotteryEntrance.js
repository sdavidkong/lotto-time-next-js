import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../constants";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";
import { Bell } from "@web3uikit/icons";
import styles from "../styles/How.module.css";
import { FaEthereum } from "react-icons/fa";

const introText = `Lotto Time is a decentralized smart contract game on Ethereum's
Goerli Testnet.`;

const LotteryEntrance = () => {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);
  console.log(`ChainId is ${chainId}`);
  const raffleAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;

  const [entranceFee, setEntrancefee] = useState("0");
  const [numPlayers, setNumPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");

  const dispath = useNotification();

  const {
    runContractFunction: enterRaffle,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    msgValue: entranceFee,
    params: {},
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getNumberOfPlayers",
    params: {},
  });

  const { runContractFunction: getRecentWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getRecentWinner",
    params: {},
  });

  async function updateUi() {
    const entranceFeeFromCall = (await getEntranceFee()).toString();
    const numPlayersFromCall = (await getNumberOfPlayers()).toString();
    const recentWinnerFromCall = await getRecentWinner();

    setEntrancefee(entranceFeeFromCall);
    setNumPlayers(numPlayersFromCall);
    setRecentWinner(recentWinnerFromCall);
    console.log(entranceFee);
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUi();
    }
  }, [isWeb3Enabled]);

  const handleSuccess = async function (tx) {
    await tx.wait(1);
    handleNewNotification(tx);
    updateUi();
  };

  const handleNewNotification = function () {
    dispath({
      type: "info",
      message: "Transaction Complete!",
      title: "Tx Notification",
      position: "topR",
      icon: <Bell />,
    });
  };

  return (
    <div>
      <div className={styles.text}>{introText}</div>
      {raffleAddress ? (
        <div className={styles.text}>
          <button
            className={styles.enterButton}
            onClick={async function () {
              await enterRaffle({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
              });
            }}
            disabled={isLoading || isFetching}
          >
            {isLoading || isFetching ? <FaEthereum /> : "Enter Lotto!"}
          </button>
          <div>
            <br></br>
            Entrance fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH
          </div>
          <div>Number of Players: {numPlayers}</div>
          <div>
            {" "}
            Recent Winner: {recentWinner.slice(0, 6)} ...{" "}
            {recentWinner.slice(recentWinner.length - 4)}
          </div>
          <br></br>
          <br></br>
        </div>
      ) : (
        <div className={styles.text}>
          Please connect your wallet to Goerli Testnet to view the Lotto!
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default LotteryEntrance;
