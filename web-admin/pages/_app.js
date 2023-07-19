import '@/styles/globals.css'
import Switch from "../components/themeswitch/switch"
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import SideNavbar from '@/components/snavbar'


export default function App({ Component, pageProps }) {
    const router=useRouter();
    const [loggeduser,setLoggedUser]=useState("nouser");

    useEffect(()=>{
      setLoggedUser(localStorage.getItem("username"));
    },[]);

    const isMyRoute = router.asPath.startsWith(`/${loggeduser}`);

    if (isMyRoute) {
      return (
        <div>
          <SideNavbar></SideNavbar>
          <Component {...pageProps} />
        </div> 
      );
    }
  
    return (
      <div>
        <Switch></Switch>
        <Component {...pageProps} />;
      </div>
    )

  // return (
  // <div>
  //     <SideNavbar></SideNavbar>
  //     <Component {...pageProps} />
  // </div>

}
