import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import { Inter } from 'next/font/google'

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return ( 
    <>
    <style jsx global>{`
    html {
      font-family: ${inter.style.fontFamily};
    }
  `}</style>
  <Component {...pageProps} />
  </>
)}
