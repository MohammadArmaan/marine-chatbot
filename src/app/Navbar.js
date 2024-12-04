import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import logo from "@/assets/image.png"
import Image from "next/image";
export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-5 bg-primary-foreground">
            <div className="object-contain">
                <Image src={logo} height={25} width={25} alt="Logo" />
            </div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    );
}