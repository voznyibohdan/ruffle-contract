import Head from "next/head";
import {Inter} from "next/font/google";
import styles from "../../../client/src/styles/Home.module.css";
import {AddAllowedToken} from "@/components/add-allowed-token";
import {Deposit} from "@/components/deposit";
import {RaffleState} from "@/components/raffle-state";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${inter.className}`}>
                <div className="mb-5"><RaffleState /></div>

                <div className="flex gap-5">
                    <AddAllowedToken />
                    <Deposit />
                </div>
            </main>
        </>
    );
}
