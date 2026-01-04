import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import logo from '../../public/icon.svg'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Fachru',
  description: 'Computer Science Student',
  icons: {
    icon: logo.src ?? logo,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}