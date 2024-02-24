import { Outfit, Young_Serif } from "next/font/google";
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-outfit" });
const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-young-serif" });
import "./globals.css";

export const metadata = {
    title: "Recipe Page",
    description: "Developed by Shivendra Jat",
    icon: "/Images/icon.png",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${youngSerif.variable}`}>
            <body>{children}</body>
        </html>
    );
}
