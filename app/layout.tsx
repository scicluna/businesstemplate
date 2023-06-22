import './globals.css'
import NavBar from '@/components/Nav'
import Footer from '@/components/Footer'

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
        <main className="flex flex-col bg-slate-50 min-h-fit gap-4">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
