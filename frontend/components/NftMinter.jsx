import styles from "../styles/NftMinter.module.css";
import { getNetwork, switchNetwork } from "@wagmi/core";
import { Contract } from "alchemy-sdk";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";

export default function NftMinter({
  contractAddress,
  tokenUri,
  abi,
  imgSrc,
}) {
  const { address } = useAccount();
  const { data: signer } = useSigner();
  const [txHash, setTxHash] = useState();
  const [isMinting, setIsMinting] = useState(false);

  const { isDisconnected } = useAccount();

  const mintNFT = async () => {
    const { chain } = getNetwork();
    
    const nftContract = new Contract(contractAddress, abi, signer);
    try {
      const mintTx = await nftContract.safeMint(tokenUri, address);

      setTxHash(mintTx?.hash);
      setIsMinting(true);
      await mintTx.wait();
      setIsMinting(false);
      setTxHash(null);
    } catch (e) {
      console.log(e);
      setIsMinting(false);
    }
  };

  return (
    <div className={styles.page_container}>
      <h1 className={styles.page_header}>Mint a Macaw to join the Squad</h1>

      <div className={styles.nft_image_container}>
        <img className={styles.nft_image} src={imgSrc} />
      </div>
      <div>
        <h1 className={styles.nft_title}>Mint to Save a MACAW </h1>
        <p>
            The MACAW Squad also known as PANDEMONIUM was born during ETHDenver 2023 Buidl-Camp
            The MACAW NFT will be used to reward people who take action to protect
            and preserve macaws and promote Web3 education PANDEMONIUM lottery.
        </p>
      </div>
      {isDisconnected ? (
        <p>Connect your wallet to get started</p>
      ) : (
        <button
          className={`${styles.button} ${isMinting && `${styles.isMinting}`}`}
          disabled={isMinting}
          onClick={async () => await mintNFT()}
        >
          {isMinting ? "Minting" : "Mint NFT"}
        </button>
      )}

      {txHash && (
        <div className={styles.transaction_box}>
          <p>See transaction on </p>
          <a
            className={styles.tx_hash}
            href={`https://mumbai.polygonscan.com/tx/${txHash}`}
          >
            Mumbai Polygon Scan
          </a>
        </div>
      )}
    </div>
  );
}
