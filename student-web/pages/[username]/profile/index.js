import UserProfile from '@/components/profile/userprofile'
import React from 'react'
import PleaseLog from '../../../components/login/Pleaselog'
import { useRouter } from 'next/router';
import { useState ,useEffect} from 'react';
function Profile() {
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

    if (paramUser==="nouser") {
      content = <PleaseLog></PleaseLog>;
    } else {
      content = (
        <div> <UserProfile/></div>
      )
    }
    return content;

}

export default Profile