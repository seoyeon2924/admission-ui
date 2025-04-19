import type { Metadata } from "next";
import { Noto_Sans_KR, Pacifico } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/layout/Header";
import Sidebar from "@/components/common/layout/Sidebar";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico'
});

export const metadata: Metadata = {
  title: "입학관리 시스템",
  description: "원서접수, 지원자 성적 업로드 및 평가, 출력 및 조회 기능을 제공하는 시스템",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={`${notoSansKr.className} ${pacifico.variable} bg-background`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-8 ml-64">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
