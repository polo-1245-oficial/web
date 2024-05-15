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
     
      
      <body className={inter.className}>
      <Header />
        {children} </body>
    </html>
  );
}
