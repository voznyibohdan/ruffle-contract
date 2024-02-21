import {prepareWriteContract, writeContract} from "@wagmi/core";
import { abi } from '@/abi';
import {Address} from "wagmi";

const contractAddress = '0x519b05b3655F4b89731B677d64CEcf761f4076f6';
const ownerAccount = '0x31403b1e52051883f2Ce1B1b4C89f36034e1221D';

export const addAllowedToken = async (tokenAddress: string) => {
    try {
        const { request } = await prepareWriteContract({
            address: contractAddress,
            abi: abi,
            functionName: 'addAllowedToken',
            args: [tokenAddress as Address],
            account: ownerAccount
        });

        const { hash } = await writeContract(request);
        return hash;
    } catch (error) {
        console.log('addAllowedToken error: ', error);
    }
}

export const deposit = async (tokenIn: string, amountIn: number) => {
    try {
        const { request } = await prepareWriteContract({
            address: contractAddress,
            abi: abi,
            functionName: 'deposit',
            // @ts-ignore
            args: [tokenIn, amountIn],
        });

        const { hash } = await writeContract(request);
        return hash;
    } catch (error) {
        console.log('deposit error: ', error)
    }
}

export const startRaffle =  async () => {
    try {
        const { request } = await prepareWriteContract({
            address: contractAddress,
            abi: abi,
            functionName: 'startRuffle',
        });

        const { hash } = await writeContract(request);
        return hash;
    } catch (error) {
        console.log('startRaffle error: ', error);
    }
}

export const endRaffle =  async (winnerIndex: number) => {
    try {
        const { request } = await prepareWriteContract({
            address: contractAddress,
            abi: abi,
            functionName: 'endRuffle',
            // @ts-ignore
            args: [winnerIndex],
        });

        const { hash } = await writeContract(request);
        return hash;
    } catch (error) {
        console.log('endRaffle error: ', );
    }
}
