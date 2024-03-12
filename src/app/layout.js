import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "@mail Broadcast",
  description:
    "Streamline your email marketing with this comprehensive email broadcast project developed by @codeguyakash. Whether you need to send targeted newsletters, promotional blasts, or automated campaigns, this solution offers the features you need to reach your audience effectively.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.svg" sizes="any" />
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
