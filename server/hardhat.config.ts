import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.24",
    networks: {
        hardhat: {
            blockGasLimit: 200_000_000,
            allowUnlimitedContractSize: true,
            gas: 2_100_000,
            gasPrice: 80_000_000_000,
        },
    },
};

export default config;
