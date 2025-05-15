import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
  title: 'Home | DevNotes',
  description: 'A Minimal Blog for Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main
          style={{
      display: "flex",
            justifyContent: "flex-start",    
          }}
        >{children}</main>  
        <Footer/>
      </body>
    </html>
  )
}
