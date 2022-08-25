import Link from "next/link";

const Header: React.FC = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="min-w-screen mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-9">
                        <div>
                            <Link href="/">
                                <a className="text-2xl font-bold flex items-center py-4 px-2">
                                    <span>
                                        T{" "}
                                        <span className="text-purple-300">
                                            N
                                        </span>{" "}
                                        & A Homes
                                    </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            href=""
                            className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-purple-500 hover:text-white transition duration-300"
                        >
                            Log In
                        </a>
                        <a
                            href=""
                            className="py-2 px-2 font-medium text-white bg-purple-500 rounded hover:bg-purple-300 transition duration-300"
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
