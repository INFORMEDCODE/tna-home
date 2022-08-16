import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const StoragePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>TN&A Homes - Storage</title>
                <meta name="description" content="TN&A Home Solutions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="container mx-auto flex flex-col items-center min-h-screen p-4">
                <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
                    Storage
                </h1>
            </main>
        </>
    );
};

export default StoragePage;
