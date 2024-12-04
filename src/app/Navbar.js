import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/image.png";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-5 bg-cyan-950 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} height={40} width={40} alt="Logo" className="rounded-full object-cover" />
                    <span className="text-xl font-semibold text-cyan-600">
                        MarineEye
                    </span>
                </Link>
            </div>

            {/* Navigation Links */}
            {/* <nav className="flex items-center space-x-6">
                <Link
                    href="/features"
                    className="text-white hover:text-gray-300 transition"
                >
                    Features
                </Link>
                <Link
                    href="/pricing"
                    className="text-white hover:text-gray-300 transition"
                >
                    Pricing
                </Link>
                <Link
                    href="/about"
                    className="text-white hover:text-gray-300 transition"
                >
                    About
                </Link>
            </nav> */}

            {/* Auth Section */}
            <div className="flex items-center space-x-4">
                <SignedOut>
                    <Link
                        href="/sign-in"
                        className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700 transition"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/sign-up"
                        className="px-4 py-2 text-sm font-medium text-cyan-600 outline rounded-md hover:bg-cyan-600 hover:outline-none hover:text-white transition"
                    >
                        Sign Up New Account
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: "border-2 border-white",
                            },
                        }}
                    />
                </SignedIn>
            </div>
        </header>
    );
}
