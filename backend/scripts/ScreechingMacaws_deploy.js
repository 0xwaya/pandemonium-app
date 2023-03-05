const hre = require("hardhat");

async function main() {
	const Contract = await hre.ethers.getContractFactory("ScreechingMacaws");
	const contract = await Contract.deploy();
	
	await contract.deployed();

	console.log("ScreechingMacaws deployed to:", contract.address);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});