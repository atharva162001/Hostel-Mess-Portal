import '@/styles/globals.css'
import Switch from "../components/themeswitch/switch"


export default function App({ Component, pageProps }) {
  
  return (
  <div>
      <Switch />
      <Component {...pageProps} />
  </div>
 
  )
}
