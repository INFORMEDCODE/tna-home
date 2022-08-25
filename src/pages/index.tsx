import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";

type ProductCardProps = {
    name: string;
    description: string;
};

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>TN&A Homes</title>
                <meta name="description" content="TN&A Home Solutions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
                <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
                    T <span className="text-purple-300">N</span> & A Homes
                </h1>
                <p className="text-2xl text-gray-700 p-2">
                    Whole house{" "}
                    <span className="text-purple-300">Solutions</span>
                </p>
                <div className="grid grid-cols-3 gap-4">
                    <ProductCard
                        name="Storage"
                        description="Manage, organise, and track storage"
                    />
                    <ProductCard
                        name="Plants"
                        description="Track plant watering cycles and moisture levels"
                    />
                    <ProductCard
                        name="Secrets"
                        description="Manage passwords and other secret information"
                    />
                </div>
            </main>
        </>
    );
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description }) => {
    return (
        <Link href={`/${name.toLowerCase()}`}>
            <a className="hover:scale-105">
                <div className="col-span-1 border-solid border-2 border-gray-200 rounded p-4">
                    <p className="font-bold">{name}</p>
                    <p>{description}</p>
                </div>
            </a>
        </Link>
    );
};

export default Home;
