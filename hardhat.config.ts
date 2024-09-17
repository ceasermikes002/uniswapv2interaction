import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers"; // Ensure this line is present
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.SEPOLIA_PRIVATE_KEY}`],
    },
  },
};

export default config;
