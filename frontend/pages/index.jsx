import styles from "../styles/Home.module.css";
import NftMinter from "../components/nftMinter";
import InstructionsComponent from "../components/InstructionsComponent";
import nftAbi from "./abi/abi.json"
export default function Home() {
  return (
    <div>
      <main className={styles.main}>

      <InstructionsComponent> </InstructionsComponent>
      <NftMinter contractAddress="0x828E499F0C302D9492f5DA138Fa84279b8C895b2" 
        abi={nftAbi} 
        imgSrc="https://nftstorage.link/ipfs/bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4"
        tokenUri="ipfs://bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4"/>
      </main>
    </div>
  );
}
