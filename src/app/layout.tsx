import Navbar from "../components/Navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}
