import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SNS Clone",
  description: "AI Agents Hero",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />   {/* stays for all pages */}
        {children}   {/* page content changes */}
      </body>
    </html>
  );
}
