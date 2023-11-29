import Navbar from "../components/Navbar"
import Head from "next/head"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Carlos's Portfolio (⌐■_■)</title>

        <meta
  name="description"
  content="Check out Carlos's projects, socials, and even play some games"
/>
        </head>

      <body>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}
