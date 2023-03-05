// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/IERC721A.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract loroLotto is VRFConsumerBase, Ownable {
    
    using EnumerableSet for EnumerableSet.AddressSet;

    bytes32 internal keyHash;
    uint256 internal fee;

    address winner;
    IERC721A nftAddress;
    IERC20 coinAddress;
    uint8 winningAmount = 10;

    EnumerableSet.AddressSet entrants;

    constructor()
        VRFConsumerBase(
            0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D, // VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB  // LINK Token
        )
    {
        keyHash = 0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15;
        fee = 0.1 * 10 ** 18; // 0.1 LINK (Varies by network)
    }

    function sendPrize() external returns (bytes32 requestId) {
        require(msg.sender == address(nftAddress), "Only NFT address contract can call");
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        require(entrants.values().length > 0, "There are no entrants!");

        return requestRandomness(keyHash, fee);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        setEntrants();
        winner = entrants.values()[randomness % entrants.values().length];
        IERC20(coinAddress).transfer(address(winner), winningAmount);
    }

    function getWinner() external view returns (address) {
        return winner;
    }  

    function getEntrants() external view returns (address[] memory) {
        return entrants.values();
    }  

    function setNftAddress(address _nftAddress) external onlyOwner {
        nftAddress = IERC721A(_nftAddress);
    }

    function setCoinAddress(address _coinAddress) external onlyOwner {
        coinAddress = IERC20(_coinAddress);
    }

    function setEntrants() private {        
        IERC721A tokenContract = IERC721A(nftAddress);
        uint256 contractTotalSupply = tokenContract.totalSupply();

        for(uint256 i = 1; i <= contractTotalSupply; i++){
            if(tokenContract.ownerOf(i) != address(0)){
                entrants.add(tokenContract.ownerOf(i));
            }
        }
    }

}