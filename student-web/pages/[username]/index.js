import React from 'react'
import Dashboard from "../../components/dashboard/maindashboard"
import PleaseLog from "../../components/login/Pleaselog"
import { useRouter } from 'next/router';
import { useEffect ,useState} from 'react';

function Home() {
    const router = useRouter();
    const [loggeduser,setLoggedUser]=useState("nouser");
    const [paramUser,setParamUser]=useState("");
    useEffect(() => {
        // checking login
        setLoggedUser(localStorage.getItem("username"));
        const url = router.asPath;
        const result = url.split('/');
        const Param = result[result.length - 1];
        setParamUser(Param);

    }, [router]);

  return (
    <div>
        {loggeduser===paramUser?(<Dashboard></Dashboard>):(<PleaseLog></PleaseLog>)} 
    </div>
  )
}

export default Home