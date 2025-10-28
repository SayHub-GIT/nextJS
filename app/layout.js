import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minecraft - Build Your Infinite World',
  description: 'Join millions of players in the ultimate sandbox adventure. Build, explore, and survive in procedurally generated worlds limited only by your imagination.',
  keywords: 'minecraft, sandbox game, building game, survival game, multiplayer game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}