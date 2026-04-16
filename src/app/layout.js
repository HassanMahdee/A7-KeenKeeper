import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import TimelineProvider from "@/components/contexts/timelineContext";
const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "A simple friendship-tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          <TimelineProvider>
            {children}
          </TimelineProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
