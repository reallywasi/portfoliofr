import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="py-20 border-b border-gray-800">
            <div className="text-center">
    <h2 className="text-4xl lg:text-5xl font-bold text-white">CONNECT WITH ME</h2>
    <p className="text-xs md:text-sm text-gray-400 max-w-[260px] md:max-w-xs mx-auto mt-2">
        Have a project in mind or just want to discuss code? My inbox and social channels are always open.
        Feel free to reach out—I’m here to collaborate and assist. Thanks for visiting!
    </p>
    <Link className="inline-block w-max p-2 mt-6 border border-gray-700" href="/Contact">
        <span className="inline-block min-w-[200px] text-xs lg:text-sm text-center font-bold py-3 px-9 bg-[#f72b1c] hover:bg-black text-white hover:text-white transition duration-300">
            Ping Me..
        </span>
    </Link>
</div>

            </div>
            <div className="text-center text-xs md:text-md text-gray-400 py-7">
                <p className="mb-1">
                    coded at night under caffeine by{" "}
                    <Link href="https://github.com/reallywasi" target="_blank">
                        <span className="text-[#f72b1c] hover:underline">
                            reallywasi
                        </span>
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
