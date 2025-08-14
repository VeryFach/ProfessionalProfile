import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fachru',
  description: 'Computer Science Student - Networks, Data Analysis, and Cloud Technologies',
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