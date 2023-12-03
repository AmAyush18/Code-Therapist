'use client'
import './globals.css';
import { Poppins } from 'next/font/google';
import { Josefin_Sans } from 'next/font/google';
import { ThemeProvider } from './utils/theme-provider';
import { Toaster } from 'react-hot-toast';
import { Providers } from './Provider';
import { SessionProvider } from 'next-auth/react';
import { useLoadUserQuery } from '../redux/features/api/apiSlice';
import Loader from './components/Loader/Loader';

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
      <body className={`${poppins.variable} ${jossefin.variable} !bg-white bg-no-repeat bg-gradient-to-b from-red-50 to-orange-100 dark:bg-gradient-to-b dark:from-emerald-950 dark:to-teal-950 duration-300`}>
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              <Custom>
               {children}
              </Custom> 
              <Toaster position='top-center' reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
        </body>
    </html>
  )
}

const Custom: React.FC<{children: React.ReactNode}> = ({children}) => {
  const { isLoading } = useLoadUserQuery({});
  return (
    <>
      {
        isLoading ? <Loader /> : <>{children}</>
      }
    </>
  )
} 
