import Footer from './Footer'
import Header from './Header'
import './globals.scss'

export const metadata = {
  title: 'NSC Global',
  description: 'NSC Global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
