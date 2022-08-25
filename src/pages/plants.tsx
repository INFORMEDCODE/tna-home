import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const PlantsPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>TN&A Homes - Plants</title>
                <meta name="description" content="TN&A Home Solutions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="mx-auto flex flex-col items-center min-h-screen">
                <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
                    Plants
                </h1>
            </main>
        </>
    );
};

export default PlantsPage;
