import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';


const Header = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: 'full',
    })
    return (
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                {/* Center Logo & Website Info */}
                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-3">
                    <Image
                        src="/logo.webp"
                        alt="Bangla News 24"
                        width={45}
                        height={45}
                        className="rounded-lg"
                    />

                    <div>
                        <h1 className="text-xl font-extrabold text-gray-900">
                            Bangla News 24
                        </h1>
                        <p className="text-xs text-gray-500">{date}</p>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="ml-auto flex items-center gap-2">
                    <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:text-red-600">
                        সাইন ইন
                    </button>

                    <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-md">
                        সাইন আপ
                    </button>
                </div>

            </div>

            <NavLinks />
        </header>
    );
};

export default Header;