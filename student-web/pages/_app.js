import '@/styles/globals.css'
import Navbar from '../components/navbar'
export default function App({ Component, pageProps }) {
  return (
    <>
  <Navbar links={["Home", "Projects", "Articles", "About"]} ctaText="Contact"/>;
    <Component {...pageProps} />
    </>
  )
}
