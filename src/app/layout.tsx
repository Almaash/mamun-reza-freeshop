import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export const metadata = {
  title: "My Website",
  description: "A simple Next.js app with sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">
        <div className="w-64 flex-shrink-0 h-full">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <header className="h-16 flex-shrink-0 bg-white z-10 shadow-md">
            <Header />
          </header>

          <main className="flex-1 overflow-y-auto  bg-gray-50">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
