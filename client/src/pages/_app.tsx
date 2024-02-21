import "@/styles/globals.css";
import type {AppProps} from "next/app";
import { Web3Modal } from "@/context/Web3Modal";
import { Header } from "@/layouts/header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <Web3Modal>
            <Header />
            <Component {...pageProps} />
        </Web3Modal>
    );
}
