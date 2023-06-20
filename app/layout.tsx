import './globals.css'
import NavBar from '@/components/Nav'

export const metadata = {
  title: 'Business Template',
  description: 'By JLS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col bg-red-50 min-h-fit" style={{ height: '170dvh' }}>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
