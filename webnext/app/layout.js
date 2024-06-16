import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header"
const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Polo_1245",
  description: "tux.software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
     <script defer src="https://cloud.umami.is/script.js" data-website-id="d23e6310-ef31-4948-8143-a6bbc67d7a4a"></script>
      
      <body className={inter.className}>
      <Header />
        {children} </body>
    </html>
  );
}
