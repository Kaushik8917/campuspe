import { Inter, Roboto, Lora, Caveat } from "next/font/google";
import "../styles/globals.css";
import "../styles/components.css";
import WaitlistProvider from "@/components/WaitlistProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto", display: "swap" });
const lora = Lora({ subsets: ["latin"], weight: ["700"], variable: "--font-lora", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["600"], variable: "--font-caveat", display: "swap" });

export const metadata = {
  title: "CampusPe — Connect 10X Faster",
  description: "One platform connecting students, colleges & employers — faster. Discover colleges, find jobs and internships, list your institution or start hiring.",
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${lora.variable} ${caveat.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <WaitlistProvider>{children}</WaitlistProvider>
      </body>
    </html>
  );
}
