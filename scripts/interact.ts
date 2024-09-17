import { ethers } from "hardhat";
import { Contract } from "ethers";
import uniswapRouterAbi from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";

const UNISWAP_ROUTER_ADDRESS = "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008"; // UniswapV2 Router on Sepolia

async function main() {
  const [deployer]:any = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Instantiate Uniswap Router Contract
  const router: Contract = new ethers.Contract(
    UNISWAP_ROUTER_ADDRESS,
    uniswapRouterAbi.abi,
    deployer
  );

  // Interact with two functions (other than ones used in class)
  // Example: Getting the factory address and WETH address

  // 1. Get factory address
  const factoryAddress = await router.factory();
  console.log("Factory address:", factoryAddress);

  // 2. Get WETH address
  const wethAddress = await router.WETH();
  console.log("WETH address:", wethAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
