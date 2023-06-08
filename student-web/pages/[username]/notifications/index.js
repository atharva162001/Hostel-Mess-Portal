import React from 'react'
import Notification from '@/components/notifications/notification'
import PleaseLog from '../../../components/login/Pleaselog'
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
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

    }, [router]);

    //  --------------------------------------------------------------------------------------
    // --------------------------------------authentication end------------------------------
    let content;

    if (loggeduser !== paramUser) {
      content = <PleaseLog></PleaseLog>;
    } else {
      content = (
        <div> <Notification/></div>
      )
    }
    return content;
}

export default StudentNotification