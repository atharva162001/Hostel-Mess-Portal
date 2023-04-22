import '@/styles/globals.css'
import Switch from "../components/themeswitch/switch"
import SideNavbar from '@/components/snavbar'


export default function App({ Component, pageProps }) {
  
  return (
  <div>
      <SideNavbar></SideNavbar>
      <Component {...pageProps} />
  </div>
 
  )
}
