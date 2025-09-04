import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BlinkDM",
  description: "실시간 채팅 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
