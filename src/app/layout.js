import './globals.css';
import Navbar from '../components/Navbar';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'My Portfolio',
  description: 'Showcasing my work and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20 px-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

