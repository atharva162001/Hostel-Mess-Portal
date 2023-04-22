import '@/styles/globals.css'
import Switch from "../components/themeswitch/switch"


export default function App({ Component, pageProps }) {
  
  return (
  <div>
      
      <Component {...pageProps} />
  </div>
 
  )
}
