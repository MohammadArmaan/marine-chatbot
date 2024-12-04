import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./Navbar";
export default function Layout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>
                    <Navbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}