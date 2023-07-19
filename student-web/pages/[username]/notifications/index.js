import React from 'react'
import Notification from '@/components/notifications/notification'
import PleaseLog from '../../../components/login/Pleaselog'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import Navbar from '@/components/navbar';
function StudentNotification() {
   // ------------------------------authentication---------------------------------
    //  -----------------------------------------------------------------------------
    const router = useRouter();
    const [loggeduser, setLoggedUser] = useState("nouser");
    const [paramUser, setParamUser] = useState("");
    useEffect(() => {
        // checking login
        setLoggedUser(localStorage.getItem("username"));
        const url = router.asPath;
        const result = url.split('/');
        const Param = result[result.length - 2];
        setParamUser(Param);
        console.log("It's Route")
    }, []);
    console.log(loggeduser)
    //  --------------------------------------------------------------------------------------
    // --------------------------------------authentication end------------------------------
    let content;

    if (paramUser==="nouser") {
      content = <PleaseLog></PleaseLog>;
    } else {
      content = (
        <div>
        <Notification/></div>
      )
    }
    return content;
}

export default StudentNotification