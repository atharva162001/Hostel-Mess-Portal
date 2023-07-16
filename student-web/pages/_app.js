import '@/styles/globals.css'
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import SideNavbar from '@/components/navbar'


export default function App({ Component, pageProps }) {
    const router=useRouter();
    const [loggeduser,setLoggedUser]=useState("nouser");

    useEffect(()=>{
      setLoggedUser(localStorage.getItem("username"));
    },[router]);

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
        
        <Component {...pageProps} />;
      </div>
    )

  // return (
  // <div>
  //     <SideNavbar></SideNavbar>
  //     <Component {...pageProps} />
  // </div>

}
