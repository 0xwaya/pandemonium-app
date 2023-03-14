import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					PANDEMONIUM<span>SQUAD</span>
				</h1>
				<p>
					Spreading web3 in Latin America {" "}
					<span>pandemonium.nft</span>
				</p>
			</header>

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"./"}
				>
					<div className={styles.button}>
						{/*<img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} />*/}
						<p>LORO COIN</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"./"}
				>
					<div className={styles.button}>
						{/*<img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} />*/}
						<p>lottery</p>
					</div>
				</a>
				<a
					target={"_blank"}
					href={"./pages/Minter.jsx"}
				>
					<div className={styles.button}>
						{/*<img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} />*/}
						<p>MINT NFT</p>
					</div>
				</a>
			</div>
			<div>
				<p>built with Alchemy-SDK 🦜 by @wayalabs</p>
			</div>
		</div>
	);
}
