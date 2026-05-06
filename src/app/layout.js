import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "TkPunchMag",
  description: "Premium protein formulated for the hardest hitters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${lexend.variable} dark`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background-dark font-[family-name:var(--font-lexend)] text-white">
        {children}
      </body>
    </html>
  );
}