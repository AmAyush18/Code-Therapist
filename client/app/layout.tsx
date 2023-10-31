import './globals.css';
import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import { ThemeProvider } from './utils/theme-provider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const jossefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${jossefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-emerald-950 dark:to-teal-950 duration-300`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
