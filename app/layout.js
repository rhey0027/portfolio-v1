// import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import '@styles/globals.css'
import '@styles/style.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Portfolio-v2',
  description: 'This is my second version',
};


export default function RootLayout ({ children }) {
  return (
    <>
      <html lang='en'>
        <link 
          rel="icon" 
          href="/icon?<generated>"
          type='image/png'
          sizes='32x32' 
        />
        <body className={inter.className}>
          { children}
        </body>
      </html>
    </>
  )
}

